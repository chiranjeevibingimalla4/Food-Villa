import { useRouteError } from "react-router-dom";
const Error = ()=>{
    const error = useRouteError();
    console.log(error);
    const {status, statusText} = error;
    return(
        <>
            <h1>...OOPS!</h1>
            <h2>Something went wrong</h2>
            <p>{status}:{statusText}</p>
        </>
    )
}
export default Error;