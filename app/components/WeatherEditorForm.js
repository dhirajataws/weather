
import React from 'react'

require('../scss/responsive.scss');

class WeatherEditorForm extends React.Component {
    constructor(props) {
        super(props);
        /* Style values can be read from props to make them real configurable as a component
        */
        this.myStyle ={
            border:"solid black 1px",
            width: "400px",
            background:"#f4f5f7"
        }
        this.label ={
            margin: "8px",
            display: "block"

        }
        this.radio ={
            margin: "8px",
        }
        this.setRef = this.setRef.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onChangeUnit = this.onChangeUnit.bind(this);
        this.onChangeWind = this.onChangeWind.bind(this);
    }

    setRef(node){
        this.inputTitle = node;
    }
    onTitleChange(){
        this.props.onChangeTitle(this.inputTitle.value);
    }
    onChangeUnit(e){
        this.props.onChangeUnit(e.target.value)
    }
    onChangeWind(e){
        this.props.onChangeWind(e.target.value)
    }

    render() {
        return (
            <div style={this.myStyle}>
                <form className="form">
                    <div className="row">
                        <label style={this.label}> Title</label>
                        <input type="text" className="form-control" ref={this.setRef}
                               onChange={this.onTitleChange} value={this.props.title}/>
                    </div>
                    <div className="row">
                        <label style={this.label}> Unit</label>

                        <label>
                             <input type="radio" style={this.radio}  checked={this.props.unit === 'C'} value='C' onChange={this.onChangeUnit}/>
                          Celsius
                        </label>
                        <label>
                             <input type="radio" style={this.radio} checked={this.props.unit === 'F'} value='F'onChange={this.onChangeUnit}/>
                            Fahrenheit
                        </label>
                    </div>
                    <div className="row">
                        <label style={this.label}>Wind</label>
                        <label>
                        <input type="radio" style={this.radio}  checked={this.props.wind === 'on'} value='on' onChange={this.onChangeWind}/>
                        On</label>
                            <label>
                        <input type="radio" style={this.radio} checked={this.props.wind === 'off'} value='off'onChange={this.onChangeWind}/>
                            Off</label>
                    </div>
                </form>
            </div>
        )
    }
}
export default WeatherEditorForm