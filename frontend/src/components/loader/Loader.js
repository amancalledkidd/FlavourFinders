import React from "react";
import "./loader.css";



import { ReactComponent as LoaderIcon } from "../assets/Magnify-1s-200px.svg";
const Loader = () => {
    return (
        <>
        {<LoaderIcon/>}
        <div className="loading-message-container">
            <p className="loading-message">Finding your flavours...</p>
        </div>
        </>
    )
}

export default Loader
