import React from 'react'
import request from 'superagent'

class HoroscopeSearch extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      horoscope: '',
      submit: '',
      dailyHoroscopes: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.getHoroscopes = this.getHoroscopes.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick (e) {
    this.setState({
      submit: this.state.horoscope
    })
  }

  // BELOW ISN'T WORKING... WORK IN PROGRESS
  getHoroscopes () {
    request
      .get('https://www.horoscopes-and-astrology.com/json')
      .then(res => {
        this.setState({
          dailyHoroscopes: res.body.dailyhoroscope
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render () {
    return (
      <div className='Horoscope'>
        <h2>Horoscope</h2>
        My horoscope is: <br />
        <select value={this.state.horoscope} name="horoscope" onChange={this.handleChange}>
          <option value="">Please select...</option>
          <option value="Capricorn">Capricorn</option>
          <option value="Aquarius">Aquarius</option>
          <option value="Pisces">Pisces</option>
          <option value="Aries">Aries</option>
          <option value="Taurus">Taurus</option>
          <option value="Gemini">Gemini</option>
          <option value="Cancer">Cancer</option>
          <option value="Leo">Leo</option>
          <option value="Virgo">Virgo</option>
          <option value="Libra">Libra</option>
          <option value="Scorpio">Scorpio</option>
          <option value="Sagittarius">Sagittarius</option>
        </select><br />
        <button onClick={this.handleClick}>Get Horoscope</button>
        <p>This is your daily horoscope: {this.dailyHoroscopes}</p>
      </div>
    )
  }
}

export default HoroscopeSearch
