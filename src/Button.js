import React from 'react';
import './Button.css';

export default function Button({ title, handleClick }) {
	return (
		<button className='Button' onClick={handleClick}>
			{title}
		</button>
	);
}
