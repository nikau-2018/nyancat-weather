import React from 'react'
import request from 'superagent'

class DuckDuckGo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      topic: []
    }
    this.fetchDuck = this.fetchDuck.bind(this)
  }

  componentDidMount () {
    this.fetchDuck()
  }

  getDuck () {
    // const apiKey = 'NXAmZhbmoEmsh7cGrs65Iuou2kwsp1zkjsGjsnInDHz4mw46IS'
    return request
      .get(`https://duckduckgo-duckduckgo-zero-click-info.p.mashape.com/?q=DuckDuckGo&format=json`)
      .then(res => {
        return res.body
      })
      .catch(err => {
        console.error(err)
      })
  }

  fetchDuck () {
    return getDuck()
      .then(items => {
        this.setState({
          topic: items
        })
      })
  }

  render () {
    return (
      <div className='DuckDuckGo'>
        <h2>DuckDuckGo</h2>
        {/* {this.state.weather.map((weather, i) => (
          <div key={i}>
            <h1> <span className = 'degrees'>{Object.values(weather)}</span></h1></div>
        ))} */}
        <h1>{this.state.weather.temp}</h1>
      </div>
    )
  }
}

export default DuckDuckGo