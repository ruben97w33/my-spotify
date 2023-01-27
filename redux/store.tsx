import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from "./slices/playlist";
import colorReducer from "./slices/color";

export const store = configureStore({
  reducer: {
    playlist: playlistReducer,
    color: colorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
