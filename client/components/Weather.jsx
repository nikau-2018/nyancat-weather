import React from 'react'
import request from 'superagent'

class WeatherSearch extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      degrees: [],
      rain: ''
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
          degrees: res.body.main,
          rain: res.body.weather
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
        <h1>{this.state.degrees.temp + ' degrees'}</h1>
      </div>
    )
  }
}

export default WeatherSearch
