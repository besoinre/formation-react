import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './MemeEditor.module.scss';
import Button from "../Buttonjs/Button";

const memeEditorInitialState = {};

const MemeEditor = (props) => {

    const [state, setState] = useState(memeEditorInitialState);

    return (
        <div className={styles.MemeEditor} data-testid="MemeEditor">
            <form>
                <label>Meme name </label>
                <input type="text" id="name" value={props.meme.name}
                       onChange={(evt) => {
                           props.onFormChange({...props.meme, name: evt.target.value})
                       }}
                />
                <br />
                <br />
                <label>Image </label>
                <select onChange={(evt) => {
                    props.onFormChange({...props.meme, imageId: Number(evt.target.value)})
                }}>
                    {props.images.map( (e,i) => {
                        return (
                            <option key={`key-${i}`} value={e.id} selected={Number(e.id) === Number(props.meme.imageId)}>
                                {e.url}
                            </option>
                        )
                    })}
                </select>
                <br />
                <br />
                <label>Text </label>
                <input type="text" placeholder="texte du meme" value={props.meme.text}
                       onChange={(evt) => {
                           props.onFormChange({...props.meme, text: evt.target.value})
                       }}
                />
                <br />
                <br />
                <label>Position </label>
                <label htmlFor={"x"}> X : </label>
                <input type={"text"} value={props.meme.x}
                       onChange={(evt) => {
                           props.onFormChange({...props.meme, x: evt.target.value})
                       }}
                />
                <br />
                <br />
                <label htmlFor={"y"}> Y : </label>
                <input type={"text"} value={props.meme.y}
                       onChange={(evt) => {
                           props.onFormChange({...props.meme, y: evt.target.value})
                       }}
                />
                <br />
                <br />
                <label htmlFor={"color"}> Color : </label>
                <input type={"color"} value={props.meme.style.fill}
                       onChange={(evt) => {
                           props.onFormChange(
                               {...props.meme,
                                   style:{
                                       ...props.meme.style,
                                       fill: evt.target.value
                                   }
                               }
                           )
                       }}
                />
                <br />
                <br />
                <label htmlFor={"textDecoration"}> Text Decoration : </label>
                <input type={"checkbox"} checked={props.meme.style.textDecoration === "underline"}
                       onChange={(evt) => {
                           props.onFormChange(
                               {...props.meme,
                                   style:{
                                       ...props.meme.style,
                                       textDecoration: (evt.target.checked ? "underline" : "none")
                                   }
                               }
                           )
                       }}
                />
                <br />
                <br />
                <label htmlFor={"fontStyle"}> Font Style : </label>
                <input type={"checkbox"} checked={props.meme.style.fontStyle === "italic"}
                       onChange={(evt) => {
                           props.onFormChange(
                               {...props.meme,
                                   style:{
                                       ...props.meme.style,
                                       fontStyle: (evt.target.checked ? "italic" : "normal")
                                   }
                               }
                           )
                       }}
                />
                <br />
                <br />
                <label htmlFor={"fontSize"}> Font Size : </label>
                <input type={"number"} value={props.meme.style.fontSize}
                       onChange={(evt) => {
                           console.log(evt.target.value);
                           props.onFormChange(
                               {...props.meme,
                                   style:{
                                       ...props.meme.style,
                                       fontSize: Number(evt.target.value)
                                   }
                               }
                           )
                       }}
                />
                <br />
                <br />
                <label htmlFor={"fontWeight"}> Font Weight : </label>
                <input type={"number"} value={props.meme.style.fontWeight}
                       onChange={(evt) => {
                           console.log(evt.target.value);
                           props.onFormChange(
                               {...props.meme,
                                   style:{
                                       ...props.meme.style,
                                       fontWeight: Number(evt.target.value)
                                   }
                               }
                           )
                       }}
                />
                <hr/>
                <Button type={"reset"} backgroundColor={"tomato"}>Reset</Button>
                <Button type={"submit"} backgroundColor={"skyblue"}>Save</Button>
            </form>
        </div>
    )
}




MemeEditor.propTypes = {
    meme: PropTypes.object.isRequired,
    onFormChange: PropTypes.func.isRequired
};

MemeEditor.defaultProps = {};

export default MemeEditor;
