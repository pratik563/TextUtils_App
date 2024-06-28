import React from 'react'
import { useState } from 'react';

const TextForm = (props) => {
  const [text,setText] = useState('')
  
  const Uppercase= () => {
    let newtext = text.toUpperCase();
    setText(newtext)
  }

  const Lowercase= () => {
    let newtext = text.toLowerCase();
    setText(newtext)
  }
  
  const Cleartext= () => {
    let newtext = " ";
    setText(newtext)
  }
  
  const Copytext=() =>{
    var text = document.getElementById("form-box")
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleChange= (event) => {
    setText(event.target.value);
  }

  return (
    <div className='bigcontainer'>
    <div className='container'>
    <h1>{props.heading}</h1>
    <div className="mb-3">
      <textarea name="form" id="form-box" cols="80" rows="10" value={text} onChange={handleChange}></textarea>
    </div>
    
    <div className='buttons'>
    <button className='btn btn-primary mx-1 my-1' onClick={Uppercase}>To UpperCase</button>
    <button className='btn btn-primary mx-1 my-1' onClick={Lowercase}>To LowerCase</button>
    <button className='btn btn-primary mx-1 my-1' onClick={Cleartext}>Clear</button>
    <button className='btn btn-primary mx-1 my-1' onClick={Copytext}>Copy to Clipboard</button>
    </div>

    </div>

    <div className="container1 my-3">
      <h2>Your Text Summary</h2>
      <p>[{text.split(' ').filter((e)=>{return e.length!==0}).length} Words and {text.length} Characters ] & </p>
      <p>[{Math.round( 0.009 * text.split(' ').length)}  Minutes Read ]</p>
    </div>
    </div>
   
  )
}
export default TextForm