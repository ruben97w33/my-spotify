import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface DataState {
  value: any;
}

const initialState: DataState = {
  value: 0,
};

export const playlist = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    select: (state, action: PayloadAction<object>) => {
      state.value = action.payload;
    },
  },
});

export const { select } = playlist.actions;
export default playlist.reducer;
