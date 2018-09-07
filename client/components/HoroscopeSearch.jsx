import React from 'react'

import { getHoroscopes } from '../api'

class HoroscopeSearch extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      horoscope: '',
      dailyhoroscope: {},
      dates: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.fetchHoroscopes = this.fetchHoroscopes.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount () {
    this.fetchHoroscopes()
  }

  fetchHoroscopes () {
    return getHoroscopes()
      .then(res => {
        this.setState({
          dailyhoroscope: res.dailyhoroscope,
          dates: res.dates
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
          {horoscopeList.map((item) => {
            return <option key={item} value={item}>{item}</option>
          })}
        </select><br />
        {this.state.horoscope && <p>
          <strong>Today&apos;s horoscope: </strong>{this.state.dailyhoroscope[this.state.horoscope].split('<')[0]}
        </p>}

      </div>
    )
  }
}

export default HoroscopeSearch
