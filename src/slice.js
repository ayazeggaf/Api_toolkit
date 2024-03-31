import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProduct = createAsyncThunk('produit',async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = response.json();
    return data;
  }
);

export const slice = createSlice({
  name: 'produit',
  initialState: {
    data: [],
    msg: ''
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state, action) => {
        state.msg = 'loading';
        console.log(state.msg);
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.msg = 'success'; // Fixed typo here
        console.log(state.msg);
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.msg = 'failed';
        console.log(state.msg);
      });
  }
});

export default slice.reducer;
