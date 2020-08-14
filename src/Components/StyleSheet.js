import React from 'react'
import './MyStyle.css'

//handling single and multiple css classes
function StyleSheet(props) {
    let className = props.primary? 'primary': ''
    return (
        <div>
            {/* handling multiple classes below */}
            <h1 className ={`${className} font-xl`}>StyleSheets</h1>
        </div>
    )
}

export default StyleSheet
