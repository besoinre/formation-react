import React, {useEffect, useState} from 'react';
import MemeViewer from "../../MemeViewer/MemeViewer";
import MemeEditor from "../../MemeEditor/MemeEditor";
import FlexLayout from "../../layout/FlexLayout/FlexLayout";
import {CURRENT_MEME_ACTIONS, currentInitialState, memeInitialState, store} from "../../../store/store";
import {withRouter} from "react-router-dom";

const MemeCreator = (props) => {

    const [current, setCurrent] = useState(currentInitialState);
    const [lists, setLists] = useState(memeInitialState);

    useEffect( () => {
        setCurrent( store.getState().current);
        setLists(store.getState().lists);
        store.subscribe(() => {
            setCurrent(store.getState().current);
            setLists(store.getState().lists);
        })
    }, [])

    useEffect(() => {
        if(props.match.params.id ){
            store.dispatch({type: CURRENT_MEME_ACTIONS.UPDT_CURRENT, value: lists.memes.find((e) => e.id === Number(props.match.params.id))})
        }else{
            store.dispatch({type: CURRENT_MEME_ACTIONS.CLEAR_CURRENT});
        }
    }, [lists, props.match.params.id])

    return (
        <FlexLayout>
            <MemeViewer meme=
                            {{
                                ...current,
                                image: lists.images
                                    .find(e => e.id === current.imageId)
                            }}
            />
            <MemeEditor/>
        </FlexLayout>
    );
};

export default withRouter(MemeCreator);
