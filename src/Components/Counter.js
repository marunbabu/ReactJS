import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increment() {
        //1. Never modify state directly always use setState else UI will not render
        //2. If you want to update state after setState use call back method inside setState

        /*  this.setState({
             count: this.state.count + 1
         }, () => {
             console.log("Call Back Value- ", this.state.count)
         })
         console.log(this.state.count) */
         //3. If you want to update state based on the previous state always use functions as an argument
        //4. React may group multiple setState calls in to a single Update for better performance
        //so always try using the below way rather than the above approach- here we tried calling increment()
        //method 5 times
         this.setState((prevState)=>({
             count:prevState.count + 1
         }))
    }
incrementFive(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
}
    render() {
        return (
            <div>
                <div>Count : <b>{this.state.count}</b></div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>

        )
    }
}

export default Counter
