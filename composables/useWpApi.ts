/**
 * WordPress Composables
 * A collection of WordPress composable functions.
 */

import { Post } from "~~/types/Post.type";

export function useWpApi() {
  const config = useRuntimeConfig();
  const WP_URL: string = config.wpUrl;

  console.log("WP_URL:", WP_URL); // Log the WordPress URL

  const get = async <T>(endpoint: string) => {
    console.log("Making GET request to:", endpoint);
    try {
      const response = await useFetch<T>(`https://www.louisgibson.co.uk/wp-json/wp/v2/${endpoint}`);
      console.log("GET request successful:", response);
      return response;
    } catch (error) {
      console.error("Error in GET request:", error);
      throw error; // Rethrow the error for further handling
    }
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
