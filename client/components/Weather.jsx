import React from 'react'
import request from 'superagent'

class WeatherSearch extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      city: '',
      submit: '',
      weather: []
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

  getWeather () {
    const apiKey = '04724fc963d95283c15d1baad2517bb6&'
    let city = this.state.submit
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
    const temperature = Number(this.state.weather.temp)
    return (
      <div className='form'>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.city} onChange = {this.handleChange.bind(this)}/>
          <button type= 'submit'>Submit</button></form>
        <h1>{this.state.submit}</h1>
        <p>{Math.floor(temperature)}</p>
      </div>
    )
  }
}

export default WeatherSearch

// class WeatherSearch extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       weather: [],
//       city: ''
//     }
//   }

//   componentDidMount () {
//     this.getWeather()
//   }

//   getWeather () {
//     const apiKey = '04724fc963d95283c15d1baad2517bb6&'
//     let city = 'auckland'
//     let units = 'metric'
//     request
//       .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`)
//       .then(res => {
//         this.setState({
//           weather: res.body.main
//         })
//       })
//       .catch(err => {
//         console.error(err)
//       })
//   }

//   render () {
//     return (
//       <div className='Weather'>
//         <h2>Weather</h2>
//         <div className = 'form'>
//           <p>Location: <input name='city'/></p>
//           <button>Submit</button>
//         </div>
//         <h1>{this.state.weather.temp}</h1>
//       </div>
//     )
//   }
// }

// export default WeatherSearch
