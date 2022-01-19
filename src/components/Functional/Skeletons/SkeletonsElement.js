import React from 'react';
import './Skeleton.css'

function SkeletonsElement({type}) {
    const classes = `skeleton ${type}`;
    return (
        <div className={classes}>
        </div>
    );
}

export default SkeletonsElement;