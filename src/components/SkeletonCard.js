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
    "text":"w-4/5 h-8 mx-2 py-2 my-2 bg-gray-200 rounded-sm",
    "dishImg":"w-24 h-16 mx-auto my-1 bg-gray-200 rounded-xl",
    "dishText":"w-7/12 h-6 mx-2 py-2 my-2 bg-gray-200 rounded-sm",
    "dishTextSmall":"w-2/12 h-4 mx-2 my-2 bg-gray-200 rounded-sm"
}

export const SkeletonFoodItem = ()=>{
    return(
        <div className="animate-pulse flex justify-between mx-auto my-2 w-3/5 p-4 border-gray-300 border rounded-xl">
            <div className="w-4/5">
                <SkeletonElement style="w-6/12 h-6 mx-2 py-2 my-2 bg-gray-200 rounded-sm" />
                <SkeletonElement style="w-1/12 h-4 mx-2 my-2 bg-gray-200 rounded-sm" />
                <SkeletonElement style="w-2/12 h-4 mx-2 my-2 bg-gray-200 rounded-sm" />
                <SkeletonElement style="w-7/12 h-4 mx-2 py-2 my-2 bg-gray-200 rounded-sm" />
                
            </div>
            <div className="w-1/5">
                <SkeletonElement style="w-full h-full mx-auto my-1 bg-gray-200 rounded-xl" />
            </div>
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