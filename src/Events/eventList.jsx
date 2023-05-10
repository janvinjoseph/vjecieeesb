import React from "react";
import './Events.css'
export default function EventsList(props) {
    return (
        <div className="card">
            <img className="product--image" src={props.url}></img>
            <h2>{props.name}</h2>
            <p>{props.discription}</p>
        </div>
    )
}