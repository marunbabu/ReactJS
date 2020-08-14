import React from 'react'

/* function Greet(){
    return <h1>Hello Marun</h1>
} */

const Greet = (props) => {

    return (
       /*div tag is required when you handle multiple html tags */
        <div>
            <h1>Hello {props.name}... {props.heroName}</h1>
            {props.children}
        </div>
    )
}

export default Greet