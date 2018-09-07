import React from 'react'
import request from 'superagent'

class WeatherSearch extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      city: '',
      submit: '',
      weather: [],
      temp: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getWeather = this.getWeather.bind(this)
  }

  componentDidUpdate () {
    this.getWeather()
  }

  handleChange (e) {
    this.setState({
      city: e.target.value
    })
  }

  handleSubmit (e) {
    const submitState = this.state.city
    e.preventDefault()
    this.setState({
      submit: submitState
    })
  }

  clearSubmit (e) {
    e.preventDefault()
    this.setState({
      submit: ''
    })
  }

  getWeather () {
    const apiKey = '04724fc963d95283c15d1baad2517bb6&'
    let city = this.state.submit
    let units = 'metric'
    request
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`)
      .then(res => {
        this.setState({
          weather: res.body.main,
          temp: res.body.main.temp
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
        <button onSubmit={this.clearSubmit}>Clear</button>
        <div style={style}>{this.state.submit}</div>
        <div style={style}>{Number(this.state.temp)}
        </div>
      </div>
    )
  }
}

export default WeatherSearch
