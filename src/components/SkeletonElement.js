import React from 'react';
import './stylesheets/Shimmer.css';

const SkeletonElement = ({type})=>{
    console.log("shimmer ui");
    const classes = `skeleton ${type}`;
    return(
        <>
            <div className={classes} ></div>
        </>
    );
}

export default SkeletonElement;