import React from "react";
import "./style.css"

function GameCard(props) {
  return (
    <div className="img-container col-3">
      <img alt={props.name} src={process.env.PUBLIC_URL + props.image} onClick={() => props.onClick(props.id)}/>
    </div>
  )
}

export default GameCard;