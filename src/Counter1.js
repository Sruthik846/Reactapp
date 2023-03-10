import React from 'react'
import {useState,useEffect} from 'react'

function Counter1() {
    const [count,setCount] = useState(0)
    useEffect(()=>
    {
        console.log('Mounting');
        console.log("Updating" +count)
    },[count])
  return (
    <div>
        {/* increment - updating */}
        <button onClick={()=>setCount(count+1)}>Add</button>
        <h1>Hi {count}</h1>
    </div>
  )
}

export default Counter1
