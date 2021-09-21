import React from 'react';
import styles from './App.module.scss'
import ThumbnailLayout from "./components/layout/ThumbnailLayout/ThumbnailLayout";
import MemeViewer from "./components/MemeViewer/MemeViewer";
import {REST_ADR, RESOURCES} from "./config/config";
import FlexLayout from "./components/layout/FlexLayout/FlexLayout";
import MemeEditor from "./components/MemeEditor/MemeEditor";

const initialState = {
    memes: [],
    current:
        {
            imageId: 1,
            x: 100,
            y: 300,
            text: "Mon premier meme",
            name: "Meme name",
            style: {
                fontSize: 60,
                fill: "#ACACAC",
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
            <div className={styles.App}>
                <div>{JSON.stringify(this.state.current)}</div>
                <FlexLayout>
                    <MemeViewer meme=
                                    {{
                                        ...this.state.current,
                                        image: this.state.images
                                            .find(e => e.id === this.state.current.imageId)
                                    }}
                    />
                    <MemeEditor
                        meme={this.state.current}
                        images={this.state.images}
                        onFormChange={(currentInForm) => {
                            this.setState({current: currentInForm});
                        }}
                    />
                </FlexLayout>
            </div>
        )
    }
}

export default App;
