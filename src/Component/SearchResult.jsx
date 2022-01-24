import React from "react";

const SearchResult = (props) => {
    const imageAddress = `https://source.unsplash.com/400x400/?${props.ImgName}`
    return (
        <div className="img-result">
            <img src={imageAddress} alt="Search"></img>
        </div>
    )
}

export default SearchResult;