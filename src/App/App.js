import React from 'react';
import styles from './App.module.scss'
import ThumbnailLayout from "./components/layout/ThumbnailLayout/ThumbnailLayout";
import MemeViewer from "./components/MemeViewer/MemeViewer";
import {REST_ADR, RESOURCES} from "./config/config";

const initialState = {
    memes: [],
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
    images: []
};

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount() {
        const promise1 = fetch(`${REST_ADR}${RESOURCES.memes}`)
            .then(f => {
                return f.json()
            });
        const promise2 = fetch(`${REST_ADR}${RESOURCES.images}`)
            .then(f => f.json());

        Promise.all([promise1, promise2]).then(fs => {
            console.log(fs);
            this.setState({
                memes: fs[0],
                images: fs[1]
            })
        });


    }

    render() {
        return (
            <>
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
                <div>
                    <h2>
                        State :
                    </h2>
                    {JSON.stringify(this.state)}
                </div>
            </>
        )
    }
}

export default App;
