/**
 * WordPress Composables
 * A collection of WordPress composable functions.
 */

import { Post } from "~~/types/Post.type";

export function useWpApi() {
  const config = useRuntimeConfig();
  const WP_URL: string = config.wpUrl;

  console.log("useWpApi: WP_URL loaded:", WP_URL); // Log the WordPress URL at load time

  const get = async <T>(endpoint: string) => {
    const url = `https://backend.louisgibson.co.uk/wp-json/wp/v2/${endpoint}`;
    console.log("useWpApi: Preparing to fetch data from:", url);

    try {
      const response = await useFetch<T>(url);
      console.log("useWpApi: Fetch successful for endpoint:", endpoint, "Response:", response);
      return response;
    } catch (error) {
      console.error("useWpApi: Fetch error for endpoint:", endpoint, "Error:", error);
      throw error;
    }
  };

  const getPosts = async (
    category?: number,
    page: number = 1,
    perPgae: number = 100,
    fields: string = "author,id,excerpt,title,link,slug,date,acf"
  ) => {
    let query: string = `project?page=${page}&per_page=${perPgae}&_embed=1&sort_order=menu_order`;
    if (category) {
      query += `&categories=${category}`;
    }
    return get<Post[]>(query);
  };

  const getACF = async (
    category?: number,
    page: number = 1,
    perPgae: number = 100,
    fields: string = "author,id,excerpt,title,link,slug,date,subtitle,showclient"
  ) => {
    let query: string = `project?_fields=acf&acf_format=standard&per_page=100`;
    return get<Post[]>(query);
  };

  const getPost = async (slug: string) => {
    return get<Post>(`project?slug=${slug}&_embed=1`);
  };

  const getCatgories = async (fields: string = "name,slug,count") => {
    return get<any>(`categories`);
  };

  const getCatgory = async (slug: string) => {
    return get<any>(`categories?slug=${slug}`);
  };

  
  const getClients = async (
    fields: string = "client"
  ) => {
    let query: string = `pages?slug=clients`;
    return get<Post[]>(query);
  };

  return {
    get,
    getPosts,
    getPost,
    getCatgories,
    getCatgory,
    getACF,
    getClients
  };
};
