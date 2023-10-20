import React from "react";
import { ReactComponent as LoaderIcon } from "/Users/jannalimpin/RecipeGenerator/FlavourFinders/frontend/src/assets/Magnify-1s-200px.svg";

const Loader = () => {
    return (
        <>
        {<LoaderIcon/>}
        <p>Finding your flavours...</p>
        </>
    )
}

export default Loader
