import {useEffect} from "react";

const Clean = ({temp, onClick}) => {
    const Hello = () => {
        useEffect(() => {
            console.log("hi :)");
            return () => console.log("bye :(")
        }, []);
        return (
            <h1>Hello</h1>
        );
    }
    return (
        <div>
            {temp ? <Hello /> : null}
            <button onClick={onClick}>{temp ? "Hide" : "Show"}</button>
        </div>
    );
}

export default Clean;