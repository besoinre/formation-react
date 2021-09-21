import React from 'react';
import styles from './App.module.scss'
import ThumbnailLayout from "./components/layout/ThumbnailLayout/ThumbnailLayout";
import MemeViewer from "./components/MemeViewer/MemeViewer";

const initialState = {
    memes: [
        {
            id: 0,
            imageId: 0,
            x: 50,
            y: 300,
            text: "Mon premier meme",
            name: "Meme name",
            style: {
                fontSize: 30,
                fill: "tomato",
                textDecoration: "normal",
                fontStyle: "normal",
                fontWeight: 800
            }
        },
        {
            id: 1,
            imageId: 1,
            x: 50,
            y: 300,
            text: "Mon Second meme",
            name: "Formation react",
            style: {
                fontSize: 50,
                fill: "white",
                textDecoration: "underline",
                fontStyle: "normal",
                fontWeight: 500
            }
        }
    ],
    current:
        {
            imageId: 0,
            x: 100,
            y: 300,
            text: "Mon premier meme",
            name: "Meme name",
            style: {
                fontSize: 60,
                fill: "white",
                textDecoration: "underline",
                fontStyle: "normal",
                fontWeight: 500
            }
        },
    images: [
        {
            id: 0,
            url: "/img/memes/oldman.jpg",
            h: 900,
            w: 600,
        },
        {
            id: 1,
            url: "/img/memes/jump.jpg",
            h: 900,
            w: 600,
        }
    ]
};

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    render() {
        return (
            <div className={styles.App}>
                <ThumbnailLayout>
                    {
                        this.state.memes.map((e, i) => {
                            return (
                                <MemeViewer key={`meme-${i}`} meme={
                                    {
                                        ...e,
                                        image: this.state.images
                                            .find( ef => ef.id === e.imageId)

                                    }
                                } />
                            );
                        })
                    }
                </ThumbnailLayout>
            </div>
        )
    }
}

export default App;
