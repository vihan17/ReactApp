import React,{useState} from 
'react';
function App(){
  const[count  , setCount] = useState(0);

  return(
    <div>
      <h1>React Couter App</h1>
      <p>{count}</p>
      <button onClick={()=>
      {setCount(count+1)}}>Increase</button>
      <button onClick={()=>
      setCount(count-1)}>Decrement</button>
    </div>
  );
}
export default App;