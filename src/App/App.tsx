import React from 'react';
import './App.css';
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
        <div>Hello World </div>
        <hr/>
        <Button text={"Ne cliquez pas"}/> <Button text={"Cliquez moi"}/> <Button><div>TEST</div></Button>
    </div>
  );
}

export default App;
