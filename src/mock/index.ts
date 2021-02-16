import { createServer } from 'miragejs';
import { IApiResponse } from '../types/api.interface';
import { IPost } from '../types/post.interface';

import data from './data.json';

const defaults = {
  paginationSize: 10,
};

const getPostsWithCategories = (
  data: IApiResponse['posts'],
  categories: string[]
) => {
  const posts = [];
  for (const post of data) {
    if (
      categories.every((category) =>
        post.categories.find((c) => c.name === category)
      )
    )
      posts.push(post);
  }
  return posts;
};

const getPostsWithPagination = (
  data: IApiResponse['posts'],
  page: number,
  size: number
) => {
  return data.slice((page - 1) * size, page * size);
};

export interface IGetPostsResponse {
  posts: IPost[];
  currentPage: number;
  pageSize: number;
  totalPages: number;
  totalResults: number;
}
createServer({
  routes() {
    this.namespace = 'api';

    this.get(
      '/posts',
      (schema, request): IGetPostsResponse => {
        //filters
        const filters = request.queryParams.filters;
        const dataAfterFilters = filters
          ? getPostsWithCategories(data.posts, filters.split(','))
          : data.posts;

        //pagination
        const page = Number(request.queryParams.page);
        const size =
          Number(request.queryParams.size) || defaults.paginationSize;
        const dataAfterPagination = page
          ? getPostsWithPagination(dataAfterFilters, page, size)
          : dataAfterFilters;
        return {
          posts: dataAfterPagination,
          currentPage: page,
          pageSize: size,
          totalPages: Math.ceil(dataAfterFilters.length / size),
          totalResults: dataAfterPagination.length,
        };
      }
    );
    this.get('/posts/:id', (_, request) => {
      const id = request.params.id;
      return data.posts.filter((p) => p.id === id);
    });
  },
});
