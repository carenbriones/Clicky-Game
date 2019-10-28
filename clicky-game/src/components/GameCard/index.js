import React from "react";
import "./style.css"

function GameCard(props) {
  return (
    <div className="img-container col-3">
      <img alt={props.name} src={props.image} onClick={() => props.onClick(props.id)}/>
    </div>
  )
}

export default GameCard;