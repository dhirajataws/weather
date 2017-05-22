export const title =(state='Default Title', action) => {
    switch(action.type){
        case 'CHANGE_TITLE' :
           // return Object.assign({},state,{title:action.title})
            return action.title
        default:
            return state
    }
}

export const unit =(state='C', action) => {
    switch(action.type){
        case 'CHANGE_UNIT' :
            //return Object.assign({},state,{unit:action.unit})
            return action.unit;
        default:
            return state
    }
}

export const wind =(state='on', action) => {
    switch(action.type){
        case 'CHANGE_WIND' :
            //return Object.assign({},state,{wind:action.wind})
            return action.wind
        default:
            return state
    }
}
