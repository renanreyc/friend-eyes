import React from "react";
import "./Card.css";

export const Card = () => {
    return (
        <div className="card">{ props.children }</div>
    )
}