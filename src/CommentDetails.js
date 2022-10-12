import React from "react";
import ReactDOM from "react-dom";

const CommentDetails = function (props) {

    console.log(props)

    return (<div style={{ border: "1px solid black" }}>
        <h1>{props.name}</h1>
        <h1>{props.city}</h1>
        <h2>{props.learning}</h2>
    </div>)
}
export default CommentDetails