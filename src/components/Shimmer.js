import './stylesheets/Shimmer.css';
import React from 'react';


const Shimmer = ({type})=>{
    const classes = `skeleton ${type}`;
    return(
        <>
            <h1>Shimmer UI....</h1>
            <div className={classes} ></div>
        </>
    );
}

export default Shimmer;