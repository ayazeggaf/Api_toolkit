import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getPosts = createAsyncThunk("posts", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
});
export const deletPost=createAsyncThunk("deleteposts",async(id)=>{
  await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return id;
})
export const addPost=createAsyncThunk("addPost",async(data)=>{
 const respense =await axios.post(`https://jsonplaceholder.typicode.com/posts`,data);
  return respense.data;
})
export const update=createAsyncThunk("updatePost",async(data)=>{
  const respense=await axios.put(`https://jsonplaceholder.typicode.com/posts/${data.id}`,data)
  const d=respense.data
  return d
})

const initialState = {
  posts: [],
  loading: false
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(getPosts.rejected, (state) => {
        state.loading = false;
      })
      .addCase(deletPost.fulfilled, (state,action) => {
        state.posts = state.posts.filter(e=>e.id!==action.payload);
      })
      .addCase(update.fulfilled,(state,action) => {
       const post =state.posts.find(e=>e.id==action.payload.id);
       if(post){
        post.title=action.payload.title;
        post.body=action.payload.body
       }
      
      })
      .addCase(addPost.fulfilled,(state,action)=>{
       state.posts.push(action.payload);
      })
      ;
  }
});


export default postSlice.reducer;
