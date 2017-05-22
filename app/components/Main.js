import React from 'react'

class Main extends React.Component {

    render()
    {
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
}
module.exports = Main;