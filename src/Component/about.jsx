import React from "react";

const About = (props) => {
    console.log(props);
    return (
        <>
            <h2>this is {props.pagename} page</h2>
        </>
    )
}

export default About;