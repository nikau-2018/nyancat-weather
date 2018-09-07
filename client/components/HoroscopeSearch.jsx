import React from 'react'

import { getHoroscopes } from '../api'

class HoroscopeSearch extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      horoscope: '',
      submit: '',
      dailyhoroscope: {},
      dates: {}
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
          dailyhoroscope: dailyhoroscope.dailyhoroscope,
          dates: dailyhoroscope.dates
        })
      })
  }

  render () {
    const horoscopeList = Object.keys(this.state.dates)
    return (
      <div className='horoscope'>
        <h2>Horoscopes</h2>
        <ul>
          {horoscopeList.map((item, i) => {
            return <li key={i}><strong>{item}: </strong>{this.state.dates[item]}</li>
          })}
        </ul>
        My horoscope is: <br />
        <select value={this.state.horoscope} name="horoscope" onChange={this.handleChange}>
          <option value="">Please select...</option>
          {horoscopeList.map((item, i) => {
            return <option key={i} value={item}>{item}</option>
          })}
        </select><br />
        <button onClick={this.handleClick}>Get Horoscope</button><br /><br />
        <p><strong>Today's horoscope: </strong>{this.state.submit && this.state.dailyhoroscope[this.state.submit].split('<')[0]}</p>
      </div>
    )
  }
}

export default HoroscopeSearch
