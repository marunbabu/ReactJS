import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log("Function Click Event Triggered")
    }
    return (
        <div>
            {/* Call clickHandler function without "()" if not clickHandler fucntion 
            gets trigerred as soon as the Page Loads and during click nothing will happen
            */}
            <button onClick={clickHandler}>FunctionClick</button>
        </div>
    )
}

export default FunctionClick
