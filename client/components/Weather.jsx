import React from 'react'
import request from 'superagent'

class WeatherSearch extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      city: '',
      weather: {
        temp: '',
        temp_max: '',
        temp_min: ''
      },
/*       sunTimes: {
        sunrise: '',
        sunset: ''
      }, */
      wind: {
        speed: '',
        deg: ''
      }

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getWeather = this.getWeather.bind(this)
    this.clearSubmit = this.clearSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({
      city: e.target.value
    })
  }

  handleSubmit (e) {
    this.getWeather()
  }

  clearSubmit (e) {
    e.preventDefault()
    this.setState({
      city: '',
      weather: {},
      sunTimes: {}
    })
  }

  getWeather () {
    const apiKey = 'e213a796d74993feb0fea46f73ce123a'
    let city = this.state.city
    let units = 'metric'
    request
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`)
      .then(res => {
        this.setState({
          weather: res.body.main,
/*           sunTimes: res.body.sys, */
          wind: res.body.wind
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render () {
    console.log(Date(1536297759), Date(1536345198))
    return (
      <div className='form'>
        <input value={this.state.city} onChange = {this.handleChange.bind(this)}/>
        <button onClick={this.handleSubmit}>Submit</button>
        <button onClick={this.clearSubmit}>Clear</button>
        <p>{this.state.weather.temp && `Today the temperature in ${this.state.city} is ` + Math.round(Number(this.state.weather.temp)) + ' degrees Celsius.'}</p>
        <p>{this.state.weather.temp_max && `High: ${this.state.weather.temp_max}` + ' degrees Celsius'}</p>
        <p>{this.state.weather.temp_min && `Low: ${this.state.weather.temp_min}` + ' degrees Celsius'}</p>
{/*         <p>{this.state.sunTimes.sunrise && `Sunrise: ${Date(this.state.sunTimes.sunrise)}`}</p>
        <p>{this.state.sunTimes.sunset && `Sunset: ${Date(this.state.sunTimes.sunset)}`}</p> */}
{/*         <p>{this.state.wind.speed && `The wind speed is ${this.state.wind.speed}`}</p> */}

      </div>
    )
  }
}

export default WeatherSearch
