import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCardAction } from 'modules/cards';

import { getCardType } from 'utils';

import Button from 'components/Button';
import Control from 'components/Control';
import CardIcon from 'components/CardIcon';
import { CardForm, CardFormFooter } from 'components/CardForm';

class CardFormContainer extends Component {
	constructor(props) {
		super(props);
		this.add = this.add.bind(this);
		this.changeComment = this.changeComment.bind(this);
		this.changeNumber = this.changeNumber.bind(this);

		this.state = {
			number: '',
			comments: '',
		}
	}

	add() {
		this.props.onAdd({
			number: this.state.number,
			comments: this.state.comments
		});
		this.setState({
			number: '',
			comments: ''
		})
	}

	changeComment(e) {
		this.setState({
			comments: e.target.value
		})
	}

	changeNumber(e) {
		if (isNaN(e.target.value)) return;

		this.setState({
			number: e.target.value
		})
	}

	render() {
		const {
			number,
			comments
		} = this.state;
		const type = getCardType(number);
		const disabledSave = this.state.number.length < 16 && type !== 'Mastercard' && type !== 'Visa';

		return (
			<CardForm>
				<Control
				  label='Номер карты'
          		  maxLength={16}
          		  placeholder='0000-0000-0000-0000'
          		  value={number}
          		  onChange={this.changeNumber}
				/>
				<Control
				  label='Комментарий'
          		  maxLength={1024}
          		  placeholder='Зарплатная карта'
          		  rows="7"
          		  type='textarea'
          		  value={comments}
          		  onChange={this.changeComment}
				/>
          		<CardFormFooter>
          			<CardIcon number={number}/>
          			<Button
          			  disabled={disabledSave}
          			  onClick={this.add}
          			>Добавить</Button>
          		</CardFormFooter>
        	</CardForm>
		);
	}
}


export default connect(state => null, 
	{ onAdd: addCardAction }
)(CardFormContainer);