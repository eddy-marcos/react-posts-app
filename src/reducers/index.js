import { combineReducers } from 'redux';
import posts from './posts';
import comments from './comments';

export const reducers = combineReducers({ posts, comments });
