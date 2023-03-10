import './App.css'
import {useState} from 'react'
import Counter from './Counter'
// 2 nd class
// import Header from './components/Header'

// function App() {
//   const data = "text"
//   return (
//     <div>
      
//       {/* component passing a variable to header.js */}
//       <Header data={data}/>

//         {/* this is not html......jsx */}
//         <h1 className='hello'>Hello World!</h1>

//         <p>This is smple {data}</p>

//         {/* Call hi component here */}
//         <Hi/>
//     </div>
//   );
// }
  

// // Create a new component
// function Hi(){
//   return(<h1>Hi</h1>)
// }

// ---------------------------------------------------------------------------------------------------------------------------
// 3rd class button actions
function App(){
  //    var     func must be change            set useState with default val,here assign 0
  const [count,setCount] = useState(0) 

  const addCount=()=>{
    setCount(count+1)   // call func here
  }


  let obj = {
    title:'Ist Counter',
    count                           //count:count
  }

  return(
    <div>
      <button onClick={addCount}>Add</button>
      <Counter title="2nd Counter" count = {count}/>

      {/* Another method to simplify the code */}
      <Counter {...obj}/>  
    </div>
  )
}


export default App;