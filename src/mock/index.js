import { createServer } from 'miragejs';

import data from './data.json';

const getPostsWithCategories = (categories, data) => {
  const posts = [];
  for(const post of data.posts) {
    if(categories.every( category => post.categories.find(c => c.name === category))) posts.push(post);
  }
  return posts;
}

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/posts', (schema, request) => {
      const filters = request.queryParams.filters;
      if(!filters) return data;
      return { posts: getPostsWithCategories(filters.split(','), data)};
    });
  },
});
