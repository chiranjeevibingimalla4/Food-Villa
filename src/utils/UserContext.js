import {createContext} from 'react';
const UserContext =createContext({
    user:{
        name:"dummy name",
        email:"dummy mail"
    },
})
UserContext.displayName="UserContext";
export default UserContext;