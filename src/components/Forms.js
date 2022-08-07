import React, { useState } from "react";

export default function Forms(props) {
  const handleUpClick = () => {
    // console.log("It is clicked.");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    // console.log("It is clicked.");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClear = () => {
    // console.log("It is clicked.");
    let newText = '';
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("It is changed.");
    setText(event.target.value);
  };
  const [text, setText] = useState('');
  return (
   <>
   <div className="container my-2">
      <h1>{props.headings}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
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
    </div>
    <div className ="container my-3">
<h2>Text Summary</h2>
<p>{text.split(" ").length} words and {text.length} characters.</p>
<p>{0.008 *text.split(" ").length} minutes taken to read. </p>
<h3>Preview</h3>
<p>{text}</p>


    </div>
    </>
  );
}
