import React, { Component } from "react";
import GameCard from "../components/GameCard";
import cards from "../cards.json";
import "./style.css"

class Game extends Component {
  state = {
    cards: cards,
    currentScore: 0,
    highestScore: 0,
    clickedCards: [],
    message: ""
  }

  handleCardClick = (id) => {
    let currentClickedCards = this.state.clickedCards;

    // If the card has been clicked already, reset game
    if (currentClickedCards.indexOf(id) > -1) {
      this.setState({
        cards: this.shuffle(this.state.cards),
        currentScore: 0,
        clickedCards: [],
        message: "Incorrect!! " + this.getCardById(id).name + " has already been clicked!"
      })
      // If card hasn't been clicked, add to clickedCards
    } else {
      this.setState({
        cards: this.shuffle(this.state.cards),
        currentScore: this.state.currentScore + 1,
        clickedCards: currentClickedCards.concat(id),
        message: "Correct!"
      })

      // Updates highest score if necessary
      if(this.state.currentScore >= this.state.highestScore) {
        this.setState({
          highestScore: this.state.currentScore + 1
        })
      }
    }
  }

  // Shuffles order of cards
  shuffle(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  }

  // Returns card by matching id number; used for incorrect message
  getCardById = (id) => {
    for (var i = 0; i < cards.length; i++) {
      if (cards[i].id === id) {
        return cards[i];
      }
    }
  }

  render() {
    return (
      <div className="container mt-3">
        <div className="row">
          <p className="col-12 directions">
            Click on an image to earn points, but don't click on any more than once!
          </p>
        </div>
        <div className="row game-container">
          {cards.map((card) => 
            <GameCard {...card} key={card.id} onClick={this.handleCardClick}/>
            )}
        </div>
        <div className="row my-3 scores">
          <h3 className="col-6">Current Score: {this.state.currentScore}</h3>
          <h3 className="col-6">Highest Score: {this.state.highestScore}</h3>
        </div>
        <div className="row msg">
          <h3 className="col-12">{this.state.message}</h3>
        </div>
      </div>
    )
  }
}

export default Game;