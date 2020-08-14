import React, { Component } from 'react'

 class ClassClick extends Component {

    clickHandler() {
    console.log("Class Event Triggered...")    
    } 
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>ClassClickEvent</button>
            </div>
        )
    }
}

export default ClassClick
