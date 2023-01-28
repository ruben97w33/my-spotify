import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from "./slices/playlist";
import colorReducer from "./slices/color";
import userReducer from "./slices/user";
import currentSongReducer from "./slices/currentSong";

export const store = configureStore({
  reducer: {
    playlist: playlistReducer,
    color: colorReducer,
    user: userReducer,
    currentSong: currentSongReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
