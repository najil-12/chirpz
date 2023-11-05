// store.ts
import { configureStore } from '@reduxjs/toolkit';
import postReducer from './reducers/postsSlice';
import addPostReducer from './reducers/addPost';

const store = configureStore({
  reducer: {
    posts: postReducer,
    addPost: addPostReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
