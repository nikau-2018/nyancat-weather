import request from 'superagent'

const horoscopeApi = 'https://www.horoscopes-and-astrology.com/json'

function getHoroscopes () {
  return request
    .get(horoscopeApi)
    .catch(err => {
      console.log(err.message)
    })
}

export default {
  getHoroscopes
}
