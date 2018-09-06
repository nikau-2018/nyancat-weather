import React from 'react'

class HoroscopeSearch extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      horoscope: ''
    }
  }
  render () {
    return (
      <div className='Horoscope'>
        <h2>Horoscope</h2>
      </div>
    )
  }
}

export default HoroscopeSearch
