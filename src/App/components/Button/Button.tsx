import React from 'react';
import './Button.css';

interface ButtonProps{
    children?:[any]|{};
    text?:string;
}

function Button(props:ButtonProps) {
    console.log(props);
    return <button className="Button">{props.children ? props.children : props.text}</button>
}

export default Button;
