import React from 'react';
import styles from './App.module.scss'
import Navbar from "./components/Navbar/Navbar";
import MemeCreator from "./components/pages/MemeCreator/MemeCreator";
import MemeThumbnail from "./components/pages/MemeThumbnail/MemeThumbnail";

class App extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.App}>
                <Navbar/>
                <MemeCreator />
                <MemeThumbnail />
            </div>
        )
    }
}

export default App;
