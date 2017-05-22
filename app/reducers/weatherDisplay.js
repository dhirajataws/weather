const weatherDisplay = (state={temp:'',name:'',windspeed:'',winddegree:''}, action) => {
    switch(action.type){
        case 'ADD_WEATHERDISPLAYDETAILS' :
          return Object.assign({},state,{temp:action.temp, name:action.name, windspeed:action.windspeed, winddegree:action.winddegree})
        default:
            return state
    }
}

export default weatherDisplay