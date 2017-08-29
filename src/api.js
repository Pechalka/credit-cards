const KEY = 'cards';

export const getCards = () => {
	return new Promise(resolve => {
		setTimeout(() => {
			const cards = JSON.parse(localStorage.getItem(KEY)) || [];

			resolve(cards)		;	
		}, 100)
	})
}

export const addCard = (data) => {
	return new Promise(resolve => {
		setTimeout(() => {
			const newitem = {
				...data,
				id: (new Date()).getTime()
			};
			const cards = JSON.parse(localStorage.getItem(KEY)) || [];
			cards.push(newitem);
			localStorage.setItem(KEY, JSON.stringify(cards));
			resolve(newitem);
		}, 100);
	})
}

export const removeCardById = (id) => {
	return new Promise(resolve => {
		setTimeout(() => {
			const cards = JSON.parse(localStorage.getItem(KEY)) || [];
			const newArr = cards.filter(card => card.id !== id);
			localStorage.setItem(KEY, JSON.stringify(newArr));
			resolve(newArr);
		}, 100)
	})
}