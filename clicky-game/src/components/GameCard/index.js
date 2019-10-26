import React from "react";

function GameCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image}/>
      </div>
    </div>
  )
}

export default GameCard;