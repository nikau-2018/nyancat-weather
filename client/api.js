import request from 'superagent'

const horoscopeApi = 'https://www.horoscopes-and-astrology.com/json'
const duckDuckApi = 'https://duckduckgo-duckduckgo-zero-click-info.p.mashape.com/?q=DuckDuckGo&format=json'

export function getHoroscopes () {
  return request
    .get(horoscopeApi)
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.log(err.message)
    })
}

export function getDuckDuck () {
  return request
    .get(duckDuckApi)
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.log(err.message)
    })
}