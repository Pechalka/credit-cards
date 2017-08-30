import { getCards, addCard, removeCardById } from '../api';

const initState = {
	cards: []
};

export const reducer = (state = initState, action) => {
	switch(action.type) {
		case 'SET_CARDS': return { ...state, cards: action.payload };

		default:
			return state;
	}
}

export const addCardAction = (data) => (dispatch, getState) => {
    addCard(data).then(() => dispatch(loadCards()));
}

export const removeCardAction = (card) => (dispatch, getState) => {
	if (window.confirm('Вы уверены?')) {
        removeCardById(card.id).then(() => dispatch(loadCards()));
    }
}

export const loadCards = () => (dispatch, getState) => {
	getCards().then(cards => {
		dispatch({
			type: 'SET_CARDS',
			payload: cards
		})
	})
} 