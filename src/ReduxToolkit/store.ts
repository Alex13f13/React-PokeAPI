import { configureStore } from "@reduxjs/toolkit";
import globalStateSlice from "./globalStateSlice";

export const store = configureStore({
  reducer: {
    globalState: globalStateSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
