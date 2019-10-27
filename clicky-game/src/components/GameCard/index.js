import React from "react";
import "./style.css"

function GameCard(props) {
  return (
    <div className="img-container col-3">
      <img alt={props.name} src={props.image} onClick={props.onClick}/>
    </div>
  )
}

export default GameCard;