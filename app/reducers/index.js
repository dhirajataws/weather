import { combineReducers } from 'redux'
import weatherDisplay from './WeatherDisplay'
import { title, unit, wind } from './WeatherParameters'

const appReducer = combineReducers({
    details:weatherDisplay,
    title,
    unit,
    wind
})

export default appReducer