import { createSlice,PayloadAction } from '@reduxjs/toolkit';

interface AllBlogsState {
  allBlogs: any[]; 
  blogLoader: boolean;
}

const initialState: AllBlogsState = {
  allBlogs: [],
  blogLoader: false,
};

export const AllBlogsSlice = createSlice({
  name: 'AllBlogsSlice',
  initialState,
  reducers: {
    setAllBlogs: (state, action: PayloadAction<any[]>) => {
      state.allBlogs = action.payload;
    },
    setBlogLoader: (state, action: PayloadAction<boolean>) => {
      state.blogLoader = action.payload;
    }
  },
});
export const {
    setAllBlogs,
    setBlogLoader,
 
} = AllBlogsSlice.actions;


export const getAllBlogs = (state:any) => state?.AllBlogsSlice?.allBlogs;
export const getBlogLoader = (state:any) => state.AllBlogsSlice.blogLoader;

export default AllBlogsSlice.reducer;
