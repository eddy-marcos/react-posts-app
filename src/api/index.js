import axios from 'axios'

const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

export const fetchPosts = () => axios.get(postsUrl);
export const fetchComments = () => axios.get(commentsUrl);
