import React, { Component } from 'react';

class CardForm extends Component {
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
		this.setState({
			number: e.target.value
		})
	}

	render() {
		const {
			number,
			comments
		} = this.state;

		return (
			<div>
          		<input value={number} onChange={this.changeNumber} />
          		<textarea value={comments} onChange={this.changeComment}/>
          		<button onClick={this.add}>add</button>
        	</div>
		);
	}
}

export default CardForm;