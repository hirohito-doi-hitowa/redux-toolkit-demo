import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// thunk action
export const fetchImage = createAsyncThunk(
  "image/fetchImage",
  async (arg, { getState }) => {
    const state = getState();
    const characterId = state.image.id + 1;

    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${characterId}`
    );

    return await response.json();
  }
);

// slice
export const imageSlice = createSlice({
  name: "image",
  initialState: {
    id: 1,
    imageUrl: `https://rickandmortyapi.com/api/character/avatar/1.jpeg`,
  },
  reducers: {},
  extraReducers: {
    [fetchImage.pending]: (state, action) => {
      // APIを実行した後、結果が帰ってくるまでに行う処理
    },
    [fetchImage.fulfilled]: (state, action) => {
      // 正常終了した際の処理
      const { id, image } = action.payload;
      state.id = id;
      state.imageUrl = image;
    },
    [fetchImage.rejected]: (state, action) => {
      // エラー時の処理
    },
  },
});

export default imageSlice.reducer;
