import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Results = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type DataProps = {
  page: number;
  total_pages: number;
  total_results: number;
  results: [] | Array<Results>;
};

const initialState: DataProps = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

const dataSlice = createSlice({
  name: 'reducer_data',
  initialState,
  reducers: {
    changeFetchData: (state, action: PayloadAction<DataProps>) => {
      state.results = action.payload.results;
      state.page = action.payload.page;
      state.total_pages = action.payload.total_pages;
      state.total_results = action.payload.total_pages;
    },
    changePage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    reset: (state) => {
      state.results = initialState.results;
      state.page = initialState.page;
      state.total_pages = initialState.total_pages;
      state.total_results = initialState.total_results;
    },
  },
});

export default dataSlice.reducer;
export const { changeFetchData, reset, changePage } = dataSlice.actions;
