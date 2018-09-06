import React from 'react'
import request from 'superagent'

class WeatherSearch extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      weather: []
    }
  }

  componentDidMount () {
    this.getWeather()
  }

  getWeather () {
    const apiKey = '04724fc963d95283c15d1baad2517bb6&'
    let city = 'auckland'
    let units = 'metric'
    request
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`)
      .then(res => {
        this.setState({
          weather: res.body.main
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render () {
    return (
      <div className='Weather'>
        <h2>Weather</h2>
        {/* {this.state.weather.map((weather, i) => (
          <div key={i}>
            <h1> <span className = 'degrees'>{Object.values(weather)}</span></h1></div>
        ))} */}
        <h1>{this.state.weather.temp}</h1>
      </div>
    )
  }
}

export default WeatherSearch
