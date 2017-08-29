import React, { Component } from 'react';

import { getCardType } from '../../utils';

class CardsList extends Component {
	constructor(props) {
		super(props);

        this.removeCard = this.removeCard.bind(this);
	}

    removeCard(card) {
        if (window.confirm('Are you sure?')) {
            this.props.removeCard(card)
        }
    }

	render() {
		const cards = this.props.cards.map(card => (
	      <div key={card.id}>
	      	<span>{getCardType(card.number)}</span>
	        <span>{card.number}</span>
	        <button onClick={() => this.removeCard(card)}>x</button>
	      </div>
	    ))

		return (
			<div>
          		{cards}
        	</div>
		);
	}
}

export default CardsList;