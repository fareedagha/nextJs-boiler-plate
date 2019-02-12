import Actions from '../actions/actions'

export default class Middleware {
static take(data){
    console.log('data', data)
    return(dispatch)=>{
         dispatch(Actions.getFeaturedData(data))
  
      }
    
}
}