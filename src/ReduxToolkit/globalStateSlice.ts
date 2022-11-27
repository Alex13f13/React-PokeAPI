import { emptyGlobalState } from './../models/IGlobalState';
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IGlobalState } from "../models/IGlobalState";

const initialState: IGlobalState = emptyGlobalState();

export const globalState = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    setCurrentLanguage: (state, action: PayloadAction<any>) => {
      state.currentLanguage = action.payload;
    },
  },
});

export const { setCurrentLanguage } = globalState.actions;

export default globalState.reducer;
