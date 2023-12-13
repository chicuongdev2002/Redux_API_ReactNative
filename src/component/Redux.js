import {createStore} from 'redux'
const initState={
        password: "",
         inputmoney:"",
        outputmoney:"",
        balance:"",
        name: "",
        id: ""
    
}
const reducer=(state=initState,action)=>{
    switch(action.type){
        case "save":
            return action.payload;
        case "update":
           return action.payload;
        case "input":
            return {...state,inputmoney:action.payload};
     case "output":
                return {...state,outputmoney:action.payload};
      case "balance":
                    return {...state,balance:action.payload};
    }
}
const store=createStore(reducer)
export default store