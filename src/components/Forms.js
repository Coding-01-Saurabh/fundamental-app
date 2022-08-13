import React, { useState } from "react";

export default function Forms(props) {
  const handleUpClick = () => {
    // console.log("It is clicked.");
    let newText = text.toUpperCase();
    setText(newText);
    props.z("converted to uppercase!", "success");
  };
  const handleLowClick = () => {
    // console.log("It is clicked.");
    let newText = text.toLowerCase();
    setText(newText);
    props.z("converted to lowercase!", "success");
  };
  const handleClear = () => {
    // console.log("It is clicked.");
    let newText = '';
    setText(newText);
    props.z("Its All Cleared!", "success");
  };
  const handleOnChange = (event) => {
    // console.log("It is changed.");
    setText(event.target.value);
  };
  
  const handleCopy = () =>{
    let x = document.getElementById("enteredBox");
    x.select();
    navigator.clipboard.writeText(x.value);
    props.z("Copied to clipboard!", "success");
  }
  const handleExtraSpaces = () =>{
    let z = text.split(/[ ]+/);
    setText(z.join(" "))
    props.z("Extra Spaces are removed!", "success");
  }
  const [text, setText] = useState('');
  return (
   <>
   <div className="container my-2" style= {{color: props.mode === `dark`?`white`:`#10365b`}}>
      <h1>{props.headings}</h1>
      <div className="mb-3">
        <textarea
          className="form-control" style ={{ background : props.mode === `dark`?`grey`:`white`, color: props.mode === `dark`?`white`:`#10365b`}}
          value={text}
          onChange={handleOnChange}
          id="enteredBox"
          rows="10"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Submit for Uppercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>Submit for Lowercase</button>
      <button className="btn btn-danger mx-1" onClick={handleClear}>Clear Text</button>
      <button className="btn btn-dark mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-success mx-1" onClick={handleExtraSpaces}>Clear Extra Spaces</button>
    </div>
    <div className ="container my-3" style= {{color: props.mode === `dark`?`white`:`#10365b`}}>
<h2>Text Summary</h2>
<p>{text.split(" ").length} words and {text.length} characters.</p>
<p>{0.008 *text.split(" ").length} minutes taken to read. </p>
<h3>Preview</h3>
<p>{text.length>0?text:"Write Above Something for Preview."}</p>
    </div>
    </>
  );
}
