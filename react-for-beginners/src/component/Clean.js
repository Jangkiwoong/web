import {useEffect} from "react";

const Clean = ({temp, onClick}) => {
    const Hello = () => {
        useEffect(() => {
            console.log("created :)");
            return () => console.log("distroyed :(")
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