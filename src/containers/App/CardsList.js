import React from 'react';

import { connect } from 'react-redux';
import { removeCardAction } from '../../modules/cards';

import CardItem from '../../components/CardItem';
import CardsList from '../../components/CardsList';


const CardsListContainer = ({ removeCard, cards}) => (
	<CardsList>
  		{cards.map(card => (
	      <CardItem
	        card={card}
	        removeCard={removeCard}
	        key={card.id}
	      />
	    ))}
	</CardsList>
);

export default connect(
	state => ({
		cards: state.cardsReducer.cards
	}),
	{ removeCard: removeCardAction }
)(CardsListContainer);