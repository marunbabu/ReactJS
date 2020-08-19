import React from 'react'

function FragmentDemo() {
    return (
        //<div> tag to be replaced with  <React.Fragment> so there will 
        //not be aaditional <div> tag when you inspect the page
        //<div>
        <React.Fragment>
            <h1>Ridhan Aadhi</h1>
            <p>Terror Guy</p>
            </React.Fragment>
        //</div>
    )
}

export default FragmentDemo
