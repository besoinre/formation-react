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
    return (
        <svg className={styles.MemeViewer}
             data-testid="MemeViewer"
             viewBox={`0 0 ${props.meme.image.w} ${props.meme.image.h}`}>
            <image href={props.meme.image.url}/>
            <text
                x={props.meme.x}
                y={props.meme.y}
                style={props.meme.style}
            >
                {props.meme.text}
            </text>
        </svg>
    );
}

export default MemeViewer;
