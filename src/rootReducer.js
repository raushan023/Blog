import {combineReducers} from 'redux';
import usersReducer from '../src/users/reducer';
import postsReducer from '../src/posts/reducer';

const RootReducer = combineReducers({
    usersReducer,
    postsReducer
  })
  
export default RootReducer;