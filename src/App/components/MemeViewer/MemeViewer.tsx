import React from 'react';
import styles from './MemeViewer.module.scss';

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
