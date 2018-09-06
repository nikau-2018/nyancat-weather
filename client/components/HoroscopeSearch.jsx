import React from 'react'

import { getHoroscopes } from '../api'

class HoroscopeSearch extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      horoscope: '',
      submit: '',
      dailyhoroscope: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.fetchHoroscopes = this.fetchHoroscopes.bind(this)
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

  componentDidMount () {
    this.fetchHoroscopes()
  }

  fetchHoroscopes () {
    return getHoroscopes()
      .then(dailyhoroscope => {
        this.setState({
          dailyhoroscope: dailyhoroscope
        })
      })
  }

  render () {
    return (
      <div className='horoscope'>
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
        <p>This is your daily horoscope: {this.state.submit && this.state.dailyhoroscope[this.state.submit].split('<')[0]}</p>
      </div>
    )
  }
}

export default HoroscopeSearch
