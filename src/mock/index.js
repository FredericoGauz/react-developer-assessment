import { createServer } from 'miragejs';

import data from './data.json';

const defaults = {
  paginationSize: 10,
};

const getPostsWithCategories = (data, categories) => {
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

const getPostsWithPagination = (data, page, size) => {
  return data.slice((page - 1) * size, page * size);
};
createServer({
  routes() {
    this.namespace = 'api';

    this.get('/posts', (schema, request) => {
      //filters
      const filters = request.queryParams.filters;
      const dataAfterFilters = filters
        ? getPostsWithCategories(data.posts, filters.split(','))
        : data.posts;

      //pagination
      const page = Number(request.queryParams.page);
      const size = Number(request.queryParams.size) || defaults.paginationSize;
      const dataAfterPagination = page
        ? getPostsWithPagination(dataAfterFilters, page, size)
        : dataAfterFilters;
      return dataAfterPagination;
    });
  },
});
