import React, { useState } from 'react'

function TextArea(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase!', 'success');
  }
  const handlelowClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lowercase!', 'success');

  }
  const handleCapitalClick = () => {
    var separateWord = text.toLowerCase().split(' ');
    for (var i = 0; i < separateWord.length; i++) {
      separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
        separateWord[i].substring(1);
    }
    const newText = separateWord.join(' ');
    setText(newText);
    props.showAlert('Capitalised!', 'success');
  }
  const handleClearClick = () => {
    setText('');
    props.showAlert('Text cleared!', 'success');
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  }
  const handleReverse = () => {
    let newText = text.split('').reverse().join('');
    setText(newText);
  }

  const handleVowelCheck = () => {
    const count = text.match(/[aeiou]/gi).length;
    props.showAlert("You have " + count + " vowels", 'success');
  }


  const handleFindAndReplace = () => {
    let oldText=text;
    let find = document.getElementById("find").value;
    let replace = document.getElementById("replace").value;
    let newText = text.replaceAll(find, replace);
    setText(newText);
    if(newText!==oldText) props.showAlert("Text was replaced successfully!", 'success')
    else props.showAlert("Text you entered was not found :( ","danger");
  }



  return (
    <>
      <div className='container my-0'>
        <h1>{props.innerText}</h1>
        <div className='mb-3'>
          <textarea className='form-control' onChange={handleOnChange} id="text-box" value={text} placeholder={props.innerText} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#8C96A1', color: props.mode === 'dark' ? 'white' : '#042743' }} rows="4"></textarea>
        </div>
        <button disabled={!text.length} className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Convert to uppercase</button>
        <button disabled={!text.length} className='btn btn-primary mx-2 my-2' onClick={handlelowClick}>Convert to lowercase</button>
        <button disabled={!text.length} className='btn btn-primary mx-2 my-2' onClick={handleCapitalClick}>Capitalise</button>
        <button disabled={!text.length} className="btn btn-secondary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={!text.length} className='btn btn-danger mx-2 my-2' onClick={handleClearClick}>Clear Text</button>
        <button disabled={!text.length} className='btn btn-danger mx-2 my-2' onClick={handleReverse}>Reverse Text</button>
        <button disabled={!text.length} className='btn btn-warning mx-2 my-2' onClick={handleVowelCheck}>Count Vowels</button>
        <div className="container my-3">
          <h4>Find and Replace the text</h4>
          <input type="text" className="form-control w-25 my-2" placeholder="Enter the text you want to change" id="find" />
          <input type="text" className="form-control w-25 mb-2" placeholder="Enter the new text you want to add" id="replace" />
          <button className="btn btn-primary mb-3 mx-1" onClick={handleFindAndReplace}>Replace</button>
        </div>
      </div>
      <div className="container my-4">
        <h2>Your text summary</h2>
        <p>{text.length} characters and {text.length > 0 ? text.trim().split(" ").length : 0} words</p>
        <p>It will take around {0.08 * (text.length > 0 ? text.trim().split(" ").length : 0)} minutes to read this text</p>
      </div>
    </>
  )
}

export default TextArea;
