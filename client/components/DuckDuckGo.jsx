import React from 'react'
import request from 'superagent'

class DuckDuckGo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      search: '',
      relatedTopics: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({
      search: e.target.value
    })
  }

  handleSubmit (e) {
    this.getDuck()
  }

  getDuck () {
    let search = this.state.search
    request
      .get(`https://duckduckgo-duckduckgo-zero-click-info.p.mashape.com/?q=${search}&format=json`)
      .set('X-Mashape-Key', 'NXAmZhbmoEmsh7cGrs65Iuou2kwsp1zkjsGjsnInDHz4mw46IS')
      .then(res => {
        const json = JSON.parse(res.text)
        this.setState({
          relatedTopics: json.RelatedTopics
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render () {
    return (
      <div className='DuckDuckGo'>
        <h2>DuckDuckGo</h2>
        <input value={this.state.search} onChange ={this.handleChange}/>
        <button onClick={this.handleSubmit}>Submit</button>
        {
          this.state.relatedTopics.map((topic, i) => {
            return <div key={i}><p>{topic.Text}</p></div>
          })
        }
      </div>
    )
  }
}

export default DuckDuckGo
