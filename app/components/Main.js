import React from 'react'

var Main = React.createClass({
    render:function(){
        "use strict";
        return (
                <div className="main-container">
                    <nav className="navbar navbar-default" role="navigation">
                     
                    </nav>
                    <div className="container">
                       {this.props.children}
                    </div>
                </div>
        )
    }
});
module.exports = Main;