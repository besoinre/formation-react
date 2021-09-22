import React, {useEffect, useState} from 'react';
import ThumbnailLayout from "../../layout/ThumbnailLayout/ThumbnailLayout";
import MemeViewer from "../../MemeViewer/MemeViewer";
import {memeInitialState, store} from "../../../store/store";
import {Link} from "react-router-dom";

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
                    <Link to={`/editor/${i}`}
                          key={`meme-${i}`} style={{flex: 1, minWidth: "30vw"}}>
                        <MemeViewer
                            key={`meme-${i}`}
                            meme={{
                                ...e,
                                image: images.find((ef) => ef.id === e.imageId),
                            }}
                        />
                    </Link>
                );
            })}
        </ThumbnailLayout>
    );
};

export default MemeThumbnail;
