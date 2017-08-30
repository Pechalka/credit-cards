import React, { Component } from 'react';
import './App.css';

import { getCards, addCard, removeCardById } from './api';
import CardForm from './components/CardForm';
import CardsList from './components/CardsList';

class App extends Component {
  constructor() {
    super();
    this.addCard = this.addCard.bind(this);
    this.loadCards = this.loadCards.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.state = {
      cards: []
    }
  }

  removeCard(card) {
    removeCardById(card.id).then(() => this.loadCards());
  }

  addCard(data) {
    addCard(data).then(() => this.loadCards());
  }

  loadCards() {
    getCards().then(cards => this.setState({ cards }));    
  }

  componentDidMount() {
    this.loadCards();
  }

  render() {
    const { cards } = this.state;
    return (
      <div className="App">
        <CardForm onAdd={this.addCard} />
        <CardsList
          cards={cards}
          removeCard={this.removeCard}
        />
      </div>
    );
  }
}

export default App;
