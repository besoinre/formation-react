import React from 'react';
import styles from './App.module.scss'

const initialState = {
    memes: [
        {
            id: 0,
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
        {
            id: 1,
            imageId: 1,
            x: 100,
            y: 300,
            text: "Mon Second meme",
            name: "Formation react",
            style: {
                fontSize: 60,
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
            h: 1000,
            w: 1000,
        },
        {
            id: 1,
            url: "/img/memes/jump.jpg",
            h: 1000,
            w: 1000,
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

            </div>
        )
    }
}

export default App;
