export const ChangeTitle =(title) => ({
    type:'CHANGE_TITLE',
    title
})
export const ChangeUnit =(unit) => ({
    type:'CHANGE_UNIT',
    unit
})
export const ChangeWind =(wind) => ({
    type:'CHANGE_WIND',
    wind
})
export const WeatherDisplayUpdate =({temp, name, windspeed, winddegree}) => ({
    type:'ADD_WEATHERDISPLAYDETAILS',
    temp,
    name,
    windspeed,
    winddegree
})
