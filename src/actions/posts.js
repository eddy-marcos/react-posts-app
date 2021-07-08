import * as api from '../api/index.js';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: 'FETCH_POSTS', payload: data });

  } catch (error) {
    
    console.log(error);
  }
};

export const sendPosts = (post) => async (dispatch) => {
  try {
    const { data } = await api.newPost(post);

    dispatch({ type: 'POST_ALL', payload: data });

  } catch (error) {
    
    console.log(error.message);
  }
};
