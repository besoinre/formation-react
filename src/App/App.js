import React from 'react';
import styles from './App.module.scss'
import Navbar from "./components/Navbar/Navbar";
import MemeCreator from "./components/pages/MemeCreator/MemeCreator";

class App extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.App}>
                <Navbar/>
                <MemeCreator />
            </div>
        )
    }
}

export default App;
