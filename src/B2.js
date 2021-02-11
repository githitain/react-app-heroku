import './App.css';
import React, {useState }from 'react'
import { Button,ProgressBar} from 'react-bootstrap';
import B1 from './components/button/button'
import Select from 'react-select';

function B2() 
{

const [inputValue, setInputValue]=useState()
const [selectedValue, setSelectedValue]=useState()

const optionV1 =[
  {value:'S1', label:20},
  {value:'S2', label:40},
  {value:'S3', label:60},
  {value:'S4', label:80},
  {value:'S5', label:100},
];

// const handleSubmit=(e)=>
// {
//   e.preventDefault();
//   inputValueSHow(inputValue);
// }

// const handleChnage=(selectedValue)=>
// {
//   setSelectedValue(selectedValue)

//   console.log("A1--> selectedValue",selectedValue)
// }

const inputValueSHow =(val) =>
{

}

  // return (
  //   <div className="App">
  //     <label>This is progressBar1</label>
  //     <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}/>

  //     <button type="submit" onClick={handleSubmit}>Submit</button>
  //     <p>You Entered {inputValue}</p>
  //     <Button variant="outline-primary">Primary</Button>{' '}
     
  //     <B1 label="click me please"></B1>
  //     <Select
  //         value={selectedValue}
  //         options={optionV1}
  //         onChange={handleChnage}
  //      />
  //     <br></br>
  //      <ProgressBar now={selectedValue.label} />

  //   </div>
  // );
}

export default B2;
