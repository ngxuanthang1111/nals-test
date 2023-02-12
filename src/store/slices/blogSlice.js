import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import blogReducers from "../reducers/blogReducers";
import { GET_DETAIL, GET_LIST } from "../types/blogTypes";

const URL_API = "https://5f55a98f39221c00167fb11a.mockapi.io/";
export const getList = createAsyncThunk(GET_LIST, async (thunkArg) => {
  const response = await axios.get(`${URL_API}blogs`, {
    params: {
      ...thunkArg,
    },
  });
  return response.data;
});

export const getDetail = createAsyncThunk(GET_DETAIL, async (thunkArg) => {
  const { id } = thunkArg;
  const response = await axios.get(`${URL_API}blogs/${id}`);
  return response.data;
});

export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    isLoading: false,
    blogs: [],
    query: {
      search: "",
      order: "asc",
      sortBy: "id",
    },
    pagination: {
      page: 1,
      limit: 20,
    },
    detail: {
      id: "",
      title: "",
      content: "",
      image: "",
    },
    totalPage: 0,
  },
  reducers: blogReducers,
  extraReducers: (builder) => {
    builder.addCase(getList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.blogs = action.payload;
      state.totalPage = Math.ceil(100 / state.pagination.limit);
    });
    builder.addCase(getList.rejected, (state) => {
      state.isLoading = false;
      state.blogs = [];
    });
    builder.addCase(getDetail.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getDetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.detail = action.payload;
    });
    builder.addCase(getDetail.rejected, (state) => {
      state.isLoading = false;
      state.detail = { id: "", title: "", content: "", image: "" };
    });
  },
});

export const { setSearch, setOrder, selectPage, nextPage, prevPage } = blogSlice.actions;

export default blogSlice.reducer;
