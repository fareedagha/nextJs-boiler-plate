
import React from 'react'
import { connect } from 'react-redux'
//import Middleware from '../store/middleware/middleware'
import Link from 'next/link'

class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',

        }


    }

    render() {
        return (
            <div>
              <p>Agha</p>
            </div>
        )
    }



}



export default About;