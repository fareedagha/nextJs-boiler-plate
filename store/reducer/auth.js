import Actions from"../actions/actions";
//import data from "../../components/data";
const initial = {
   bike : false
}
function auth(state=initial,action){
    switch(action.type){
          case Actions.ADD_USED_BIKE:
          return Object.assign({}, state ,{ render : action.payload})
        default:
        return state
    }
}

export default auth