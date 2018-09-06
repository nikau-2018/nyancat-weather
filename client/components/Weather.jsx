import React from 'react'
import request from 'superagent'

class WeatherSearch extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      weather: ''
    }
  }

  componentDidMount () {
    this.getWeather()
  }

  getWeather () {
    request
      .get('https://api.openweathermap.org/data/2.5/weather?APPID=04724fc963d95283c15d1baad2517bb6&q=Auckland,nz')
      .then(res => {
        this.setState({
          weather: res.body.weather
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
      </div>
    )
  }
}

export default WeatherSearch
