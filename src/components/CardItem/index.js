import React from 'react';

import CardIcon from '../CardIcon';
import Button from '../Button';

import './index.css';

const CardItem = ({ card, removeCard }) => (
	<div className='card-item' key={card.id}>
      	<CardIcon number={card.number} />
      	<div className='card-item__content'>
	        <span className='card-item__number'>{card.number}</span>
	        <span className='card-item__coment'>{card.comments}</span>
      	</div>
      	<div>
        	<Button onClick={() => removeCard(card)}>Удалить</Button>
        </div>
    </div>
)

export default CardItem;