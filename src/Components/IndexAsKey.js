import React from 'react'
//when to use Index as key?
//1. If your items in ur list doesnt have unique id
//2. The list is a static list and will not change
//3. When the list never be reordered and filtered
function IndexAsKey() {
    const names= ['a','b','c','a'] 
const nameList = names.map((name,index) => <h2 key={index}>{index}  {name}</h2>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default IndexAsKey
