import React, { useState } from "react";
import SearchResult from "./SearchResult";
import DefaultText from "./DefaultText";
import { useNavigate, useParams } from "react-router";
const Search = () => {
    const[Img, SetImg] = useState('');
    const urlParam = useParams();
    const history = useNavigate();
    const eventChange = (val1) => (event, currentString) => {
        console.log('value',val1);
        const Value = event.target.value;
        SetImg(Value);
    }

    return (
        <>
        <div className="search-menu">
            <h2>Hey , Welcom {urlParam.FName} {urlParam.LName}</h2>
            <input type="button" value="Go Back"  onClick={() => history.goBack()}/>
             <input type="text" placeholder="Search Anything" value={Img} onChange={eventChange('test')} ></input> {/*if we need to pass any other parameter in change event method */}
           {Img ? <SearchResult ImgName={Img}/> : <DefaultText />} 
           
        </div>
        </>
    )
}
export default Search;