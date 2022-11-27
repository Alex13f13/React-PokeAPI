export interface IGlobalState {
  currentLanguage: string;
}

export const emptyGlobalState = (): IGlobalState => {
  return {
    currentLanguage: "en",
  };
};