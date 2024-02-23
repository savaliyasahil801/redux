import './App.css';
import { useSelector , useDispatch } from 'react-redux';
import {decrementbyvalue, incrementbyvalue} from './app/counterSlice';
import { useState } from 'react';
function App() {
  const count = useSelector((state) => state.counter.value);
  const dispach = useDispatch();

  let[value,setvalue] = useState('');

  return (
    <div className="App">
      <h1>value: {count}</h1>    
      <input type="number" name="" value={value} onChange={(e) => setvalue(e.target.value)} /> <br/>
      <button onClick={() => dispach(incrementbyvalue(Number(value) || 0))}>ADD</button> 
      <button onClick={() => dispach(decrementbyvalue(Number(value) || 0))}>REMOVE</button> 
    </div>
  );
}

export default App;
