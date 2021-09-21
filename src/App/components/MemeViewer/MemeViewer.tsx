import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeViewer.module.scss';

interface MemeViewerProps {
    meme: {
        image:{
            url: string,
            h: number,
            w: number
        },
        imageId: number,
        x: number,
        y: number,
        text: string,
        name: string,
        style: {
            fontSize: number,
            fill: string,
            textDecoration: string,
            fontStyle: string,
            fontWeight: number
        }
    };
}

const MemeViewer = (props) => {

    const img = props.meme.image ? props.meme.image : {w: 1000, h: 1000, url: ''};

    return (
        <>
            <svg className={styles.MemeViewer}
                 data-testid="MemeViewer"
                 viewBox={`0 0 ${img.w} ${img.h}`}>
                <image href={img.url}/>
                <text
                    x={20}
                    y={20}
                >
                    {props.meme.name}
                </text>
                <text
                    x={props.meme.x}
                    y={props.meme.y}
                    style={props.meme.style}
                >
                    {props.meme.text}
                </text>
            </svg>
        </>
    );
}

export default MemeViewer;
