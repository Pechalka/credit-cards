import React, { Component } from 'react';


import Button from '../Button';
import './index.css';
import CardIcon from '../CardIcon';

class CardsList extends Component {
	constructor(props) {
		super(props);

        this.removeCard = this.removeCard.bind(this);
	}

    removeCard(card) {
        if (window.confirm('Вы уверены?')) {
            this.props.removeCard(card)
        }
    }

	render() {
		const cards = this.props.cards.map(card => (
	      <div className='card-item' key={card.id}>
	      	<CardIcon number={card.number} />
	      	<div className='card-item__content'>
		        <span className='card-item__number'>{card.number}</span>
		        <span className='card-item__coment'>{card.comments}</span>
	      	</div>
	      	<div>
	        	<Button onClick={() => this.removeCard(card)}>Удалить</Button>
	        </div>
	      </div>
	    ))

		return (
			<div className='cards-list'>
          		{cards}
        	</div>
		);
	}
}

export default CardsList;