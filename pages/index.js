import React from 'react'
import { connect } from 'react-redux'
import { startClock, serverRenderClock } from '../store'
import Home from '../components/examples'

class Index extends React.Component {


  

  render () {
    return <Home />
  }
}

export default connect()(Index)
