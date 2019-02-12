import React from 'react'
import { connect } from 'react-redux'
import Middleware from '../store/middleware/middleware'
import Link from 'next/link'
import Button from '@material-ui/core/Button'

import About from './about'
function mapStataToProps(state) {
console.log('state' , state.auth)
    return {

    }
}


function mapDispatchToProps(dispatch) {
    return {
click : (data)=>{
   dispatch(Middleware.take(data))

}

    }
}

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: 'agha',
            password: '',

        }


    }
    componentDidMount(){
      this.props.click(this.state.email)
    }

    render() {
        return (
            <div>
             <Button onClick={()=>{this.props.click(this.state.email)}} variant="contained" color="primary">
                    click Me
    </Button> 
    <Link href="/aboutPage">
      <a>About Page</a>
    </Link>
            </div>
        )
    }



}



export default Home = connect(mapStataToProps, mapDispatchToProps)(Home);