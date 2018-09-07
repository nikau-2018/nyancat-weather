import React from 'react'
import request from 'superagent'

class WeatherSearch extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      city: '',
      weather: {
        temp: 0
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
      city: ''
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
          weather: res.body.main
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render () {
    const style = {
      fontSize: 20
    }

    // const temperature = Number(this.state.weather.temp)
    return (
      <div className='form'>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.city} onChange = {this.handleChange.bind(this)}/>
          <button type= 'submit'>Submit</button></form>
        <button onClick={this.clearSubmit}>Clear</button>
        <div style={style}>{this.state.city}</div>
        <div style={style}>{Number(this.state.weather.temp)}
        </div>
      </div>
    )
  }
}

export default WeatherSearch
