import React from 'react';

import visa from './visa.svg';
import mastercard from './card.svg';
import { getCardType } from '../../utils';

import './index.css';

const CardIcon = ({ number }) => {
	const type = getCardType(number);

	if (type === 'Visa') {
		return (
			<div className='card-icon'>
				<img src={visa} alt='visa' />
			</div>
		);
	}

	if (type === 'Mastercard') {
		return (
			<div className='card-icon'>
				<img src={mastercard} alt='mastercard'/>
			</div>
		);
	}

	return (
		<div className='card-icon'>
			
		</div>
	);
}

export default CardIcon;