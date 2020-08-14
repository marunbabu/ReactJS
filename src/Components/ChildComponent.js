import React from 'react'

 function ChildComponent(props) {
    return (
         /* //1st approach to invoke parent class method
        <div>
            <button onClick={props.greetHandler}>Greet Parent</button>
        </div> */
            //2nd approach to invoke parent class method with return value
        <div>
            <button onClick={()=>props.greetHandler('child')}>Greet Parent</button>
        </div> 
    )
}
export default ChildComponent