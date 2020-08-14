import React from 'react'
import Person from './Person'

// List rendering
function NameList() {
    //simple rendering
   /*  const names= ['marun', 'babu', 'mp']
    const nameList =  names.map( name => <h2>{name}</h2> )
    return (
        <div>
            {nameList}
        </div>
    ) */

    //complex rendering uses separate js file for returning html which is the best practice
    const persons=[{
        id:1,
        name:'marun',
        age:30,
        skill:'java'
    },
    {
        id:2,
        name:'babu',
        age:32,
        skill:'React js'
    },
    {
        id:3,
        name:'mp',
        age:33,
        skill:'AWS' 
    },
]
// 'key prop' is mandate in React which helps react in handling list of elements like updating , iterating etc
const personList = persons.map(person => <Person key={person.id} person = {person}/>)
return (
    <div>
    {personList} 
</div>
) 
}

export default NameList
