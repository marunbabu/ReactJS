import React from 'react'
// adding css in this file itself

const heading={
    fontSize : '80px',
    color:'blue'
}

function Inline() {
    return (
        <div>
            {/* appStyles.css by default applies to child  */}
               {/* <h1 className='Error'>Error</h1> */}
                {/* appStyles.modules.css By default not applies to child elements */}
             {/* <h1 className= {styles.Success}>Success</h1> */}
            <h1 style= {heading}> Inline</h1>
        </div>
    )
}

export default Inline
