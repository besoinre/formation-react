import React, {useState} from 'react';
import './Button.css';
import PropTypes from 'prop-types';

function Button(props) {
    const [clicked, setClicked] = useState(false);
    return <button
                className={clicked ? "Button clicked" : "Button"}
                onClick={() => {
                        setClicked(true);
                        props.onLeftClick();
                        setTimeout(() => {setClicked(false)}, 200);
                    }
                }
                type={props.type}
                style={{...props.style, backgroundColor: props.backgroundColor, color: props.color}}
            >
                {props.children}
            </button>
}

Button.propTypes = {
    children: PropTypes.any.isRequired,
    onLeftClick: PropTypes.func.isRequired,
    type: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    style: PropTypes.object
}

Button.defaultProps = {
    children: "Hello World",
    onLeftClick: () => console.log("default action"),
    backgroundColor: "green",
    color: "white"
}

export default Button;
