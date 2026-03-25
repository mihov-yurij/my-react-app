import axios from 'axios';

export const fetchPosts = async () => {
  const response = await axios('https://jsonplaceholder.typicode.com/posts');

  return response.data;
};