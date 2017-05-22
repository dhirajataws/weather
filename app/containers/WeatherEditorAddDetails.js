import WeatherEditorForm from '../components/WeatherEditorForm'
import { connect } from 'react-redux'
import { ChangeTitle, ChangeUnit, ChangeWind } from '../actions'

const mapDispatchToProps = (dispatch) => {
    "use strict";
    return {
        onChangeTitle : (title) =>{
             dispatch(ChangeTitle(title))
        },
        onChangeUnit : (unit) =>{
            dispatch(ChangeUnit(unit))
        },
        onChangeWind : (wind) =>{
            dispatch(ChangeWind(wind))
        },
    }
}

const mapStateToProps = (state) => {
    "use strict";
    return {
        title : state.title,
        unit : state.unit,
        wind : state.wind
    }
}

let WeatherEditor = connect(mapStateToProps, mapDispatchToProps)(WeatherEditorForm)

export default WeatherEditor