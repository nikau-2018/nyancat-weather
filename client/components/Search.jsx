import React from 'react'

import Weather from './Weather'
import HoroscopeSearch from './HoroscopeSearch'
import DuckDuckGo from './DuckDuckGo'

const Search = () => {
  return (
    <div className='search'>
      <h2>Search</h2>
      <Weather />
      <HoroscopeSearch />
      <DuckDuckGo />
    </div>
  )
}

export default Search
