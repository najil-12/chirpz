import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch} from '../store';
import axios, { AxiosResponse } from 'axios';
import { endpoints } from '../../backend';
import { fetchPosts } from './postsSlice';

interface DataState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: {},
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: 'addPost',
  initialState,
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
    },
    fetchDataSuccess: (state, action: PayloadAction<any[]>) => {
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

export const postData = async(dispatch:AppDispatch,data: any) => {
try {
    dispatch(fetchDataStart());
    const response:AxiosResponse  = await axios.post(endpoints.addPost, data);
    const responseData = response.data
    dispatch(fetchDataSuccess(responseData));
    return responseData
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    dispatch(fetchDataFailure(errorMessage));
    return errorMessage
  }
};

