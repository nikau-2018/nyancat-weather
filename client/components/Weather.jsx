import React from 'react'
import request from 'superagent'

class WeatherSearch extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      weather: [],
      city: ''
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
        <div className = 'form'>
          <p>Location: <input name='city'/></p>
          <button>Submit</button>
        </div>
        <h1>{this.state.weather.temp}</h1>
      </div>
    )
  }
}

export default WeatherSearch
