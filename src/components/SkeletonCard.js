import React from "react";
const SkeletonElement = ({style})=>{
    const classes = style;
    return(
        <>
            <div className={classes} ></div>
        </>
    );
}

const type = {
    "restaurantImg":"w-44 h-36 mx-auto my-1 bg-gray-200 rounded-xl",
    "textSmall":"w-1/5 h-4 mx-2 my-2 bg-gray-200 rounded-sm",
    "text":"w-4/5 h-8 mx-2 bg-gray-200 rounded-sm",
}

const SkeletonFoodItem = ()=>{
    return(
        <div className="animate-pulse flex justify-between w-7/12 p-4 border-gray-300 border rounded-xl">
            <div></div>
            <div></div>
        </div>
    );
}
const SkeletonCard = ()=>{

return (
    <div className='animate-pulse  w-52 p-3 border-gray-300 border rounded-xl'>
        <SkeletonElement style={type.restaurantImg} />
        <SkeletonElement style={type.textSmall} />
        <SkeletonElement style={type.text} />        
    </div>
)
} 
export default SkeletonCard;