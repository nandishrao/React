import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [counter,setcounter]=useState()
    //in the array of const there are 1th and 2nd position the counter is a variable declared
    //and the second element is a method which controls the variable counter
    // let countvalue=19;
    const countincrease=()=>{
      // console.log("increased")
      setcounter(counter+1)
    }
    
  return (
    <>
    <h1>
      this is a counter
    </h1>
    <h2>counter value :{countvalue}</h2>
    <button onClick={countincrease}>increase count :{countvalue}</button>
    <br/>
    <button>decrease button:{countvalue}</button>
    <button>this is a button</button>
    </>
  )
}

export default App
