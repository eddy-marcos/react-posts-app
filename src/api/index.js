import axios from 'axios'

const API = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' });

// actual http requests
export const fetchPosts = () => API.get('/posts');
export const fetchComments = () => API.get('/comments');
export const newPost = (newPost) => API.post('/comments', newPost);

