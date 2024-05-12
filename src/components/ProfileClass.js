import React from 'react';
import { json } from 'react-router-dom';

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state =
        {
            userInfo:{
            name:"Dummy name",
            avatar_url:""
        }
    }
        console.log("child constructor");
    }
    async componentDidMount(){
        // API CALL
        const data = await fetch("https://api.github.com/users/chiranjeevibingimalla4");
        const json = await data.json();
        this.setState({userInfo:json});
        console.log("child component did mount");

    }
    componentDidUpdate(){
        // this.timer = setInterval(()=>{console.log("Namaste React")},1000);
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
        //  clearInterval(this.timer);
    }

    
    render(){
        console.log("child render "+this.state.userInfo.name);
        return(
            <>
                <p>{this.state.userInfo.name}</p>
                <img src={this.state.userInfo.avatar_url} />
            </>
        )
    }
}
export default Profile;