/**
 * WordPress Composables
 * A collection of WordPress composable functions.
 */

import { Post } from "~~/types/Post.type";

export function useWpApi() {
  const config = useRuntimeConfig();
  const WP_URL: string = config.wpUrl;

  const get = async <T>(endpoint: string) => {
    return useFetch<T>(`https://www.saschakrischock.com/dev/wordpress/louis/wp-json/wp/v2/${endpoint}`);
  };

  const getPosts = async (
    category?: number,
    page: number = 1,
    perPgae: number = 20,
    fields: string = "author,id,excerpt,title,link,slug,date"
  ) => {
    let query: string = `project?page=${page}&per_page=${perPgae}&_embed=1`;
    if (category) {
      query += `&categories=${category}`;
    }
    return get<Post[]>(query);
  };

  const getACF = async (
    category?: number,
    page: number = 1,
    perPgae: number = 100,
    fields: string = "author,id,excerpt,title,link,slug,date"
  ) => {
    let query: string = `project?_fields=acf&acf_format=standard`;
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

  return {
    get,
    getPosts,
    getPost,
    getCatgories,
    getCatgory,
    getACF
  };
};
