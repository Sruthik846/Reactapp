import './App.css'
import React from 'react'
import Employee from './Employee'



// ------------------- MAP (LOOP EXAMPLE)
function App1() {
    let emp = [
        {Name:"abc",Age:21},
        {Name:"gyt",Age:21},
        {Name:"fd",Age:21},

    ]
  return (
    <div>

       {/* loop */}
       {emp.map((obj,index)=>
       (
        <Employee key={index} {...obj} />                    
       ))}
       {/* end of loop */}

    </div>
  )
}

export default App1

