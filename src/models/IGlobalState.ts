export interface IGlobalState {
  currentLanguage: string;
  searchedText: string;
}

export const emptyGlobalState = (): IGlobalState => {
  return {
    currentLanguage: "en",
    searchedText: "",
  };
};