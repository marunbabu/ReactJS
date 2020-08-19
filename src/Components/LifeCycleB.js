import React, { Component } from 'react'

 class LifeCycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Ridhan'
        }
        console.log("LifeCycleB Constructor Invoked..")
    }
    
    static getDerivedStateFromProps(props, state){
        console.log("LifeCycleB getDerivedStateFromProps invoked..")
        return null
    }

    componentDidMount(){
        console.log("LifeCycleB componentDidMount invoked..")
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("LifeCycleB shouldComponentUpdate invoked..")
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifeCycleB getSnapshotBeforeUpdate invoked..")
    return null
    }
   
    componentDidUpdate(){
        console.log("LifeCycleB componentDidUpdate invoked..")
    }
    render() {
        console.log("LifeCycleB render Method invoked..")
        return (
          
            <div>
                LifeCycleB
            </div>
        )
    }
}

export default LifeCycleB
