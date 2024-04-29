import React from 'react';
import SkeletonElement from './SkeletonElement';    
import './Shimmer.css';


const SkeletonCard = ()=>{

return (
    <div className='skeleton-card'>
        <SkeletonElement type="img" />
        <SkeletonElement type="title" />
        <SkeletonElement type="textSmall" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
    </div>
)
}

export default SkeletonCard;