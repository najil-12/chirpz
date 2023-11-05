// dataSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '../store';
import axios, { AxiosResponse } from 'axios';
import { endpoints } from '../../backend';
import { ItemT as PostsItem } from '../../screen/home/Item';

interface DataState {
  data: PostsItem[];
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: [],
  loading: true,
  error: null,
};

const dataSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
    },
    fetchDataSuccess: (state, action: PayloadAction<PostsItem[]>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = dataSlice.actions;

export default dataSlice.reducer;

export const fetchPosts = async(dispatch:AppDispatch) => {
  try {
    dispatch(fetchDataStart());
    const response:AxiosResponse<{body:PostsItem[]}>  = await axios.get(endpoints.posts);
    const responseData = response.data.body
    dispatch(fetchDataSuccess(responseData));
    return responseData
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    dispatch(fetchDataFailure(errorMessage));
    return errorMessage
  }
};
