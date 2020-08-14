import React, { Component } from 'react'

 class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hello!"
        }
          {/* 3rd approach- binding Event handler in the constructor*/}
       this.clickHandler=this.clickHandler.bind(this)
       //console.log(this.clickHandler.message)
    }
    /* clickHandler(){
        this.setState({
            message:"Good Bye !"
        })
    } */
    clickHandler=()=>{
        this.setState({
            message:"as Class Property"
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* The below code throws error as 'this' keyword is undefined under Event Handler 
                <button onClick={this.clickHandler}>Click</button>*/}
                {/* 1st approach- binding this keyword using 'bind' keyword 
                <button onClick={this.clickHandler.bind(this)}>Click</button>*/}
                {/* 2nd approach using arrow function , here we used paranthesis() as we are returning value
                <button onClick={()=>this.clickHandler()}>Click</button>*/}
                  {/* 3rd approach- binding Event handler in the constructor
                <button onClick={this.clickHandler}>Click</button>*/}
                {/*4th approach- Using Arrow functions as Class property*/}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
