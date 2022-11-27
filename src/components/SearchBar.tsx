import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../ReduxToolkit/store';
import { useDebounce } from 'use-debounce';
import { setSearchedText } from '../ReduxToolkit/globalStateSlice';

export default function SearchBar() {
  const dispatch = useDispatch();
  const { globalState } = useSelector((state: RootState) => state);

  // const [searchedText] = useDebounce(globalState.searchedText, 500);
  const searchedText = globalState.searchedText;

  const handleInputChange = (e: any) => {
    dispatch(setSearchedText(e.target.value));
  }

  return (
    <input type="text" value={searchedText} onChange={handleInputChange} />
  )
}
