import React from 'react'

import Header from './Header'
import HoroscopeSearch from './HoroscopeSearch'
import Weather from './Weather'
import DuckDuckGo from './DuckDuckGo'

const App = props => {
  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-md-4">
          <h2>Search the weather in your city</h2>
          <Weather />
        </div>
        <div className="col-md-4">
          <HoroscopeSearch />
        </div>
        <div className="col-md-4">
          <DuckDuckGo />
        </div>
      </div>
    </div>
  )
}

export default App
