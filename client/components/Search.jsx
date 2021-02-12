import React from 'react'

import Weather from './Weather'
import HoroscopeSearch from './HoroscopeSearch'

const Search = () => {
  return (
    <div className='search'>
      <h2>Search</h2>
      <Weather />
      <HoroscopeSearch />
    </div>
  )
}

export default Search
