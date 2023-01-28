import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface DataState {
  value: any;
}

const initialState: DataState = {
  value: null,
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<object>) => {
      state.value = action.payload;
    },
  },
});

export const { setUser } = user.actions;
export default user.reducer;
