import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface DataState {
  value: any;
}

const initialState: DataState = {
  value: null,
};

export const currentSong = createSlice({
  name: "currentSong",
  initialState,
  reducers: {
    setCurrentSong: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
  },
});

export const { setCurrentSong } = currentSong.actions;
export default currentSong.reducer;
