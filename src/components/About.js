import {Outlet} from 'react-router-dom';
// import Profile from './ProfileClass.js';
import React from 'react';
import Profile from './Profile';

// react class - components
class About extends React.Component{
    constructor(props){
        super(props);
        console.log("parent constructor");
    }
    componentDidMount(){
        console.log("parent componentDidMount");
    }
render(){
    console.log("parent render")
    return(
        <>  
            
            <h1>This is About page</h1>
            <Outlet />
            <Profile  />
            
        </>
    )
}
}

export default About;
