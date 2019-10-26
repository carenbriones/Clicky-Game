import React, { Component } from "react";
import GameCard from "../components/GameCard";
import cards from "../cards.json";

class Game extends Component {
  state = {
    currentScore: 0,
    highestScore: 0,
    clickedCards: []
  }

  render() {
    return (
      <div>
        {cards.map((card) => 
          <GameCard {...card}/>
          )}
      </div>
    )
  }
}

export default Game;