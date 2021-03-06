import React, { Component } from 'react'


class Welcome extends Component {
    render() {
        return (
             /*div tag is required when you handle multiple html tags */
            <div>
                <h1>Welcome {this.props.name}...{this.props.heroName}</h1>
                {this.props.children}
            </div>
        )
    }
}

export default Welcome;