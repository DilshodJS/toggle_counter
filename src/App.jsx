import './App.css'
import React,{useEffect, useState} from 'react';
import Clicker from './components/Clicker';

 const App=()=>{
  const [isClicker,setclicker]=useState(false);
  return(
      // <div className='App'>
      //   <h1>React App</h1>
      //   <button className="btn btn-primary" onClick={()=>setclicker(!isClicker)}>Toggle</button>
      //    {isClicker && <Clicker/>}
      // </div>
    <div className="card">
      <div className="card-header bg-dark fs-1 text-center text-light">
        Toggle 
      </div>
      <div className="card-body d-flex justify-content-center">
        {/* <h5 className="card-title">Special title treatment</h5> */}
          <button className="btn btn-primary fs-1" onClick={()=>setclicker(!isClicker)}>Toggle</button>
      </div>
      {isClicker && <Clicker/>}
    </div>
  )
}
export default App;