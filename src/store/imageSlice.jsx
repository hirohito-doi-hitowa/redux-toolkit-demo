import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchImageAsync = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const characterId = state.image.id + 1;

    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${characterId}`
    );
    const data = await response.json();

    dispatch(fetchImage({ id: characterId, imageUrl: data.image }));
  };
};

export const imageSlice = createSlice({
  name: "image",
  initialState: {
    id: 1,
    imageUrl: `https://rickandmortyapi.com/api/character/avatar/1.jpeg`,
  },
  reducers: {
    fetchImage: (state, action) => {
      const { id, imageUrl } = action.payload;
      state.id = id;
      state.imageUrl = imageUrl;
    },
  },
});

export const { fetchImage } = imageSlice.actions;

export default imageSlice.reducer;
