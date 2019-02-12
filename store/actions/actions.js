

export default class Actions {
  
    static ADD_USED_BIKE = "ADD_USED_BIKE";
    static GET_USED_BIKE_DATA = 'GET_USED_BIKE_DATA'



static getFeaturedData(data){
    console.log('action', data)
    return{
        type : this.ADD_USED_BIKE,
       payload:data
    }

    
}}