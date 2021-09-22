import React from 'react';
import styles from './App.module.scss'
import Navbar from "./components/Navbar/Navbar";
import MemeCreator from "./components/pages/MemeCreator/MemeCreator";
import MemeThumbnail from "./components/pages/MemeThumbnail/MemeThumbnail";
import {Switch, Route} from 'react-router-dom';

class App extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.App}>
                <Navbar/>
                <Switch>
                    <Route path={'/'} exact={true}>
                        <h1>Welcome to my Meme Creator ! </h1>
                        <img src={"/img/memes/oldman.jpg"} />
                    </Route>
                    <Route path={'/editor'} exact={true}>
                        <MemeCreator />
                    </Route>
                    <Route path={'/editor/:id'}>
                        <MemeCreator />
                    </Route>
                    <Route path={'/thumbnail'}>
                        <MemeThumbnail />
                    </Route>
                    <Route path={'/'}>
                        <h1>ERROR 404</h1>
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default App;
