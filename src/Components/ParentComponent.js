import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName:'Parent'
        }
        this.greetParent=this.greetParent.bind(this)
    }
    greetParent(valueFrmChilComp){
        //parameters can hold value from Child Component
        //use the key below Esc key
        alert(`Hello ${this.state.parentName} from ${valueFrmChilComp}`)
    }
    render() {
        return (
            <div>
                {/* button is available in childComponent while clicking it, 
                 the ParentComponent method will get triggered, achieved by using props */}
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}
export default ParentComponent