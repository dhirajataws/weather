
import React from 'react'
import CombinedDisplay from '../containers/CombinedDisplay'

class Home extends React.Component {
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div>
            <CombinedDisplay/>

            </div>
        )
    }
}

module.exports = Home
