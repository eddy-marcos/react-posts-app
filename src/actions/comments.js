import * as api from '../api/index.js';

export const getComments = () => async (dispatch) => {
    try {
      const { data } = await api.fetchComments();
  
      dispatch({ type: 'FETCH_COMMENTS', payload: data });

    } catch (error) {
      
      console.log(error);
    }
  };
  