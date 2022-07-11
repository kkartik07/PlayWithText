import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.color = '#c9b9b7';
      document.body.style.backgroundColor = '#484a48';
      document. getElementsByClassName('nav').style.backgroundColor = "#dba752";
      showAlert('Dark Mode has been enabled!', 'success')
    }
    else {
      setMode('light');
      document.body.style.color = 'black';
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled!', 'success')

    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>

      <Navbar title="textFormatter" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextArea innerText="Enter the text here" showAlert={showAlert} />

    </>
  );
}

export default App;
