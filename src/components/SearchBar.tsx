import { useState } from 'react'

export default function SearchBar() {
  const [filter, setFilter] = useState('')

  const onChangefilter = (e: any) => {
    setFilter(e.target.value)
  }

  return (
    <>
      <input type="text" value={filter} onChange={onChangefilter} />
    </>
  )
}
