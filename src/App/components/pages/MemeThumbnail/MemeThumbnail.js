import React, {useEffect, useState} from 'react';
import ThumbnailLayout from "../../layout/ThumbnailLayout/ThumbnailLayout";
import MemeViewer from "../../MemeViewer/MemeViewer";
import {memeInitialState, store} from "../../../store/store";

const MemeThumbnail = () => {

    const [memes, setMemes] = useState(memeInitialState.memes);
    const [images, setImages] = useState(memeInitialState.images);

    useEffect( () => {
        setMemes( store.getState().lists.memes);
        setImages(store.getState().lists.images);
        store.subscribe(() => {
            setMemes(store.getState().lists.memes);
            setImages(store.getState().lists.images);
        })
    }, [])

    return (
        <ThumbnailLayout>
            {memes.map((e, i) => {
                return (
                    <MemeViewer
                        key={`meme-${i}`}
                        meme={{
                            ...e,
                            image: images.find((ef) => ef.id === e.imageId),
                        }}
                    />
                );
            })}
        </ThumbnailLayout>
    );
};

export default MemeThumbnail;
