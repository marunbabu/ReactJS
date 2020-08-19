import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

 class LifeCycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Ridhan'
        }
        console.log("LifeCycleA Constructor Invoked..")
    }
    
    static getDerivedStateFromProps(props, state){
        console.log("LifeCycleA getDerivedStateFromProps invoked..")
        return null
    }

    componentDidMount(){
        console.log("LifeCycleA componentDidMount invoked..")
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("LifeCycleA shouldComponentUpdate invoked..")
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifeCycleA getSnapshotBeforeUpdate invoked..")
    return null
    }

   
    componentDidUpdate(){
        console.log("LifeCycleA componentDidUpdate invoked..")
    }

    changeState =()=>{
        this.setState({
            name: 'Aadhi'
        })
    }
    render() {
        console.log("LifeCycleA render Method invoked..")
        return (
          <div>
            <div>
                LifeCycleA
            </div>
            <button onClick={this.changeState}>Update-Change State</button>
            <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA
