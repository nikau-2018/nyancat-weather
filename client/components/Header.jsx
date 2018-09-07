import React from 'react'

const Header = () => {
  const styles = {
    background: '#88BBD6',
    color: 'white',
    fontFamily: 'Montserrat',
    padding: '2%'
  }
  return (
    <div className='header' style={styles}>
      <h1>Your Daily Dose of Random Stuff</h1>
    </div>
  )
}

export default Header
