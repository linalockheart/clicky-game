import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
    <div className ="card">
        <div className="img-container">
            <img className="img-thumbnail img-responsive" alt={props.name} src={props.image}/>
        </div>
        <span onClick={() => props.handleClick(props.id)}></span>
    </div>
);

export default ImageCard;