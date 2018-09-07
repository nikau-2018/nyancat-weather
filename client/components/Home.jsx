import React from 'react'

import Header from './Header'
import HoroscopeSearch from './HoroscopeSearch'
import Weather from './Weather'

const App = props => {
  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-md-6">
          <h2>Search the weather in your city</h2>
          <Weather />
        </div>
        <div className="col-md-6">
          <HoroscopeSearch />
        </div>
      </div>
    </div>
  )
}

export default App
