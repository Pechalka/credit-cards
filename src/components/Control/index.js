import React from 'react';

import './index.css';

const Control = ({ label, type = 'text', ...props }) => (
	<div className='control'>
		<span className='control__label'>{label}</span>
		{type === 'textarea' && (
			<textarea
	  		  className='control__input'
	  		  rows="7"
	  		  {...props}
	  		/>
		)}
  		{type === 'text' && (
			<input
	  		  className='control__input'
	  		  {...props}
	  		/>
		)}
	</div>
)

export default Control;

