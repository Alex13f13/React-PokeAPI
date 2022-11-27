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
    setSearchedText: (state, action: PayloadAction<string>) => {
      state.searchedText = action.payload;
    },
  },
});

export const { setCurrentLanguage, setSearchedText } = globalState.actions;

export default globalState.reducer;
