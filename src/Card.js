import React from "react";
import "./Card.css";

const Card = (props) => {
    return (
        <>
            <div className="card">
                <div className="emoji">{props.emoji}</div>
                <h1 className="title">{props.title}</h1>
                <div className="description">{props.description}</div>
            </div>
        </>
    )
}

export default Card;