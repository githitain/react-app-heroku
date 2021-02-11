import './App.css';
import React, {useContext, useEffect, useState }from 'react'
import axios from 'axios'


function App() 
{

  let quer1 ="https://reqres.in/api/users?page=2";

const [getInputValue, setInputValue] = useState()
const [getRes, setRes] = useState()

const onSubmit =e => 
{
  e.preventDefault();

  axios.get(getInputValue).then((res => {
  var obj=JSON.stringify(res)
  setRes(obj)


  }))

}

  return (
  
    <div className="App">
      {console.log("z1---0",getInputValue)}
      <label>Demo Test</label>
      <input type="text" value={getInputValue} onChange={ e => setInputValue(e.target.value)}/>
      <br></br>
      <button type ="submit" onClick={onSubmit}>Send</button> 
      <br></br>   
      < textarea type ="text"  value={getRes}/>

    </div>
  );
}

export default App;
