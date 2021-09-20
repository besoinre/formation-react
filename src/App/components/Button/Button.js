import React from 'react';
import './Button.css';

function Button(props) {
    console.log(props);
    return <button className="Button">{props.children ? props.children : props.text}</button>
}

export default Button;
