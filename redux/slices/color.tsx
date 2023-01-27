import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { shuffle } from "lodash";

export interface DataState {
  value: number | undefined;
}

const initialState: DataState = {
  value: 0,
};

const colors = [0, 1, 2, 3, 4, 5, 6];

export const color = createSlice({
  name: "color",
  initialState,
  reducers: {
    change: (state) => {
      state.value = shuffle(colors).pop();
    },
  },
});

export const { change } = color.actions;
export default color.reducer;
