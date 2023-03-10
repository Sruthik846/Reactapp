import React from 'react'
import Counter1 from './Counter1'
import {useState} from 'react'



function App() {
    const [state,setState] = useState(false)
  return (
    <div>
       {/* Monting and umnounting */}
      <h1 onClick={()=>(setState(!state))}>Show/Hide</h1>
       { state && <Counter1/> }
       
    </div>
  )
}

export default App
