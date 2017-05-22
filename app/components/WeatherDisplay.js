import React from 'react'

class WeatherDisplay extends React.Component{
    constructor(props) {
        super(props);
        /* Style values can be read from props to make them real configurable as a component
         */
        this.myStyle ={
            border:"solid black 1px",
            width: "300px",
            background:"#f4f5f7"
        }
        this.label ={
            margin: "8px",
            display: "block"

        }
        this.titleStyle ={
            textAlign:"left",
            margin:"20px",
            fontSize:"20",
            display:"block"
        }
        this.itemStyle ={
            textAlign:"right",
            margin:"20px",
            fontSize:"15",
            display:"block"
        }
        this.nameStyle ={
            textAlign:"right",
            margin:"20px",
            fontSize:"25",
            display:"block"
        }
        this.temp_=''
        this.wind_=''

    }

    render() {
        if(this.props.unit === 'C'){
            this.temp_ = <div style={this.itemStyle}>{this.props.temp}  Celsius</div>;
        }else{
            this.temp_ = <div style={this.itemStyle}>{this.props.temp}  Fahrenheit</div>;
        }
        if(this.props.wind === 'on'){
            this.wind_ = <div style={this.itemStyle}>Wind Direction {this.props.winddegree }<div/>
                Wind Speed{this.props.windspeed} Km/h</div>;
        }else{
            this.wind_ ='';
        }
        return (
            <div style={this.myStyle}>
                <div style={this.titleStyle}>{this.props.title}</div>
                <div style={this.nameStyle}> {this.props.name}</div>
                {this.temp_}
                {this.wind_}
            </div>
        )
    }
}
export default WeatherDisplay