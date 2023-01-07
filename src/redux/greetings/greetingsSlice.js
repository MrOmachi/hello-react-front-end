import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const ApiData = 'http://localhost:3000/random_greeting';

export const getMessage = createAsyncThunk(
  'greetings/getGreetings',
  async () => {
    const response = await fetch(ApiData);
    const data = await response.json();
    return data;
  },
);

const initialState = {
  message: [],
  status: '',
};

export const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getMessage.fulfilled, (state, action) => {
      state.status = 'succeed';
      state.message = action.payload;
    });
  },
});

export default greetingsSlice.reducer;
