import React from 'react';
import './App.css';
import Button from "./components/Buttonjs/Button";

function App() {
  return (
    <div className="App">
        <div>Hello World </div>
        <hr/>
        <Button onLeftClick={(evt) => {console.log(evt)}} backgroundColor={"tomato"}><div>TEST</div></Button>
        <Button backgroundColor={"yellowgreen"}>Cliquez</Button>
        <Button style={{textDecoration:"underline"}} color={"lightBlue"}>Default Button</Button>
    </div>
  );
}

export default App;
