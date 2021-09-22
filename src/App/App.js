import React from 'react';
import styles from './App.module.scss'
import MemeViewer from "./components/MemeViewer/MemeViewer";
import FlexLayout from "./components/layout/FlexLayout/FlexLayout";
import MemeEditor from "./components/MemeEditor/MemeEditor";

import {currentInitialState, memeInitialState, store} from './store/store'

const initialState = {
    current: currentInitialState,
    images: memeInitialState.images
};

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount() {
        this.setState({current: store.getState().current, images: store.getState().lists.images});
        store.subscribe(() => {
            this.setState({current: store.getState().current, images: store.getState().lists.images});
        })
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
                    <MemeEditor />
                </FlexLayout>
            </div>
        )
    }
}

export default App;
