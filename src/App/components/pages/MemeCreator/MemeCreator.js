import React, {useEffect, useState} from 'react';
import MemeViewer from "../../MemeViewer/MemeViewer";
import MemeEditor from "../../MemeEditor/MemeEditor";
import FlexLayout from "../../layout/FlexLayout/FlexLayout";
import {currentInitialState, memeInitialState, store} from "../../../store/store";

const MemeCreator = () => {

    const [current, setCurrent] = useState(currentInitialState);
    const [images, setImages] = useState(memeInitialState.images);

    useEffect( () => {
        setCurrent( store.getState().current);
        setImages(store.getState().lists.images);
        store.subscribe(() => {
            setCurrent(store.getState().current);
            setImages(store.getState().lists.images);
        })
    }, [])

    return (
        <FlexLayout>
            <MemeViewer meme=
                            {{
                                ...current,
                                image: images
                                    .find(e => e.id === current.imageId)
                            }}
            />
            <MemeEditor/>
        </FlexLayout>
    );
};

export default MemeCreator;
