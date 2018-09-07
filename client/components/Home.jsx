import React from 'react'

import Header from './Header'
import HoroscopeSearch from './HoroscopeSearch'
import Weather from './Weather'
import DuckDuckGo from './DuckDuckGo'

const App = props => {
  const style = {
    padding: '2%'
  }
  const row = {
    fontFamily: 'Mukta'
  }
  return (
    <div className="container">
      <Header />
      <div className="row" style={row}>
        <div className="col-md-4" style={style}>
          <h4>Search the weather in your city</h4>
          <Weather />
        </div>
        <div className="col-md-4" style={style}>
          <HoroscopeSearch />
        </div>
        <div className="col-md-4" style={style}>
          <DuckDuckGo />
        </div>
      </div>
    </div>
  )
}

export default App
