import React, { useEffect } from 'react';

const Profile =()=>{
    useEffect(
        ()=>{
            const timer =setInterval(()=>{console.log("Hello this is chiru")},1000);
            return()=>{clearInterval(timer);
                console.log("setIntervals are cleared.");
            }
        }
    ,[]);
    return(
        <>
            <p>Hello this is chiru!!!</p>
        </>
    )
}
export default Profile;
