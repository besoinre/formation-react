import React, {useState, useEffect} from 'react';
import styles from './MemeEditor.module.scss';
import Button from "../Buttonjs/Button";

import {CURRENT_MEME_ACTIONS, currentInitialState, memeInitialState, store} from '../../store/store';

const MemeEditor = (props) => {

    const [images, setImages] = useState(memeInitialState.images);
    const [current, setCurrent] = useState(currentInitialState);

    // ComponentDidMount/ComponentDidUpdate
    // Return ComponentDidUnmount
    useEffect( () => {
        // Si le changement a eu lieu avant l'abonnement
        setImages(store.getState().lists.images);
        setCurrent(store.getState().current);
        store.subscribe(() => {
            setImages(store.getState().lists.images);
            setCurrent(store.getState().current);
        });
    }, []);

    return (
        <div className={styles.MemeEditor} data-testid="MemeEditor">
            <form onSubmit={(evt) => {
                evt.preventDefault();
                store.dispatch({type: CURRENT_MEME_ACTIONS.SAVE_CURRENT})
            }}>
                <label>Name : </label>
                <input type="text" id="name" value={current.name}
                       onChange={(evt) => {
                           store.dispatch({type: CURRENT_MEME_ACTIONS.UPDT_CURRENT, value:{...current, name: evt.target.value}});
                       }}
                />
                <br />
                <br />
                <label>Image : </label>
                <select onChange={(evt) => {
                    store.dispatch({type: CURRENT_MEME_ACTIONS.UPDT_CURRENT, value:{...current, imageId: Number(evt.target.value)}})
                }}>
                    {images.map( (e,i) => {
                        return (
                            <option key={`key-${i}`} value={e.id} selected={Number(e.id) === Number(current.imageId)}>
                                {e.url}
                            </option>
                        )
                    })}
                </select>
                <br />
                <br />
                <label>Text : </label>
                <input type="text" value={current.text}
                       onChange={(evt) => {
                           store.dispatch({type: CURRENT_MEME_ACTIONS.UPDT_CURRENT, value:{...current, text: evt.target.value}})
                       }}
                />
                <br />
                <br />
                <label>Position : </label>
                <br/>
                <label htmlFor={"x"}> X : </label>
                <input type={"number"} value={current.x} step={5}
                       onChange={(evt) => {
                           store.dispatch({type: CURRENT_MEME_ACTIONS.UPDT_CURRENT, value:{...current, x: Number(evt.target.value)}})
                       }}
                />
                <br />
                <br />
                <label htmlFor={"y"}> Y : </label>
                <input type={"number"} value={current.y} step={5}
                       onChange={(evt) => {
                           store.dispatch({type: CURRENT_MEME_ACTIONS.UPDT_CURRENT, value:{...current, y: Number(evt.target.value)}})
                       }}
                />
                <br />
                <br />
                <label htmlFor={"color"}> Color : </label>
                <input type={"color"} value={current.style ? current.style.fill : "#000"}
                       onChange={(evt) => {
                           store.dispatch({type: CURRENT_MEME_ACTIONS.UPDT_CURRENT, value:{...current,
                                   style:{
                                       ...current.style,
                                       fill: evt.target.value
                                   }
                               }}
                           )
                       }}
                />
                <br />
                <br />
                <label htmlFor={"textDecoration"}> Underline : </label>
                <input type={"checkbox"} checked={current.style ? current.style.textDecoration === "underline" : false}
                       onChange={(evt) => {
                           store.dispatch({type: CURRENT_MEME_ACTIONS.UPDT_CURRENT, value:{...current,
                                   style:{
                                       ...current.style,
                                       textDecoration: (evt.target.checked ? "underline" : "none")
                                   }
                               }}
                           )
                       }}
                />
                <br />
                <br />
                <label htmlFor={"fontStyle"}> Italic : </label>
                <input type={"checkbox"} checked={current.style ? current.style.fontStyle === "italic" : false}
                       onChange={(evt) => {
                           store.dispatch({type: CURRENT_MEME_ACTIONS.UPDT_CURRENT, value:{...current,
                                   style:{
                                       ...current.style,
                                       fontStyle: (evt.target.checked ? "italic" : "normal")
                                   }
                               }}
                           )
                       }}
                />
                <br />
                <br />
                <label htmlFor={"fontSize"}> Font Size : </label>
                <input type={"number"} value={current.style ? current.style.fontSize : 10} step={5}
                       onChange={(evt) => {
                           console.log(evt.target.value);
                           store.dispatch({type: CURRENT_MEME_ACTIONS.UPDT_CURRENT, value:{...current,
                                   style:{
                                       ...current.style,
                                       fontSize: Number(evt.target.value)
                                   }
                               }}
                           )
                       }}
                />
                <br />
                <br />
                <label htmlFor={"fontWeight"}> Font Weight : </label>
                <input type={"number"} value={current.style ? current.style.fontWeight : 100} step={100} min={0} max={1000}
                       onChange={(evt) => {
                           console.log(evt.target.value);
                           store.dispatch({type: CURRENT_MEME_ACTIONS.UPDT_CURRENT, value:{...current,
                                   style:{
                                       ...current.style,
                                       fontWeight: Number(evt.target.value)
                                   }
                               }}
                           )
                       }}
                />
                <hr/>
                <Button type={"reset"} backgroundColor={"tomato"}>Reset</Button>
                <Button type={"submit"}>Save</Button>
            </form>
        </div>
    )
}

export default MemeEditor;
