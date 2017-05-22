import React from 'react'
import WeatherEditor from '../containers/WeatherEditorAddDetails';
import WeatherDisplay from './WeatherDisplay';

var Helper = require('../utils/helper');

class CombinedDisplay extends React.Component {
    constructor(props){
        super(props)
        this.getTemparatureInfo = this.getTemparatureInfo.bind(this);

    }
    componentWillMount() {
        this.getTemparatureInfo(this.props.unit);
        this.timerid = setInterval(this.getTemparatureInfo(this.props.unit),10);

    }
    componentWillReceiveProps(nextProps){
        this.getTemparatureInfo(nextProps.unit);

    }
    componentWillUnmount(){
        clearInterval(this.timerid);
    }


    getTemparatureInfo(unit){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                Helper.getWhetherInfo(position.coords.latitude, position.coords.longitude, unit)
                    .then(function(data){
                        console.log(JSON.stringify(data))
                        this.props.onUpdate({temp:data.report.main.temp, name:data.report.name,
                            windspeed:data.report.wind.speed, winddegree:data.report.wind.deg});
                    }.bind(this))
            });
        } else {
            showError("Your browser does not support Geolocation!");
        }
    }

    render(){
        return(
            <div>
                <h2 className="text-center">
                    Weather Editor and Display Components Demo
                </h2>
                <div className="row">
                    <div className="col-md-5">
                        <WeatherEditor />
                    </div>
                    <div className="col-md-3">
                        <WeatherDisplay title={this.props.title}
                                        temp={this.props.temp}
                                        windspeed={this.props.windspeed}
                                        winddegree={this.props.winddegree}
                                        name={this.props.name}
                                        unit={this.props.unit}
                                        wind={this.props.wind}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
export default CombinedDisplay
