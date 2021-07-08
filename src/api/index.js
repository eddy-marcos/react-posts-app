import axios from 'axios'

const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = () => axios.get(postsUrl);
