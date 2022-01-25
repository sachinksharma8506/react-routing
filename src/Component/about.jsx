import React from "react";

const About = (props) => {
    console.log(props);
    return (
        <>
            <h2>This is {props.pagename} page</h2>
        </>
    )
}

export default About;