import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I have heard good things",
  },
  {
    id: "2",
    title: "Slices",
    content: "The more I slice, The more I want pizza",
  },
];

export const testPost = {
  id: "3",
  title: "test post",
  content: "The title for test",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost(state, action) {
      state.push(action.payload);
    },
    deletePost(state, action) {
      return state.filter((post) => post.id !== action.payload.id);
    },
  },
});

export default postsSlice.reducer;

export const selectAllposts = (state) => state.posts;
export const { addPost, deletePost } = postsSlice.actions;
// Action Creators
