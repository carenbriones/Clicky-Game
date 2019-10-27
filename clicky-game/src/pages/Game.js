import React, { Component } from "react";
import GameCard from "../components/GameCard";
import cards from "../cards.json";

class Game extends Component {
  state = {
    cards: cards,
    currentScore: 0,
    highestScore: 0,
    clickedCards: []
  }

  handleCardClick = () => {
    this.setState(
      {
        cards: this.shuffle(this.state.cards)
      });
    console.log("clicked");
  }

  shuffle(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  }

  render() {
    return (
      <div className="row">
        {cards.map((card) => 
          <GameCard {...card} key={card.id} onClick={this.handleCardClick}/>
          )}
      </div>
    )
  }
}

export default Game;