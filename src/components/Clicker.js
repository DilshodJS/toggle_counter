import React,{useState} from 'react';

 const Clicker=()=>{
  const [count,setcount]=useState(0);
  function incr(){
    setcount(count+1)
  }
  function decr(){
    setcount(count-1)
  }

  return(
    <div className="card-body d-flex justify-content-center">
      <div className='Clickerr'>
        <h1>Counter:{count}</h1>
       <button className='btn btn-secondary d-block mt-5 w-100' onClick={incr}>Icnrement</button>
       <button className='btn btn-secondary d-block mt-5 w-100' onClick={decr}>Decrement</button>
      </div>
      </div>
  )
}
export default Clicker;