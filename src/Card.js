import React from 'react';
import './Card.css';

const Card = ({ title, subtitle, src, alt }) => {
	return (
		<div className='Card'>
			<img src={src} alt={alt} className='Card-image' />
			<p className='Card-title'>{title}</p>
			<p className='Card-subtitle'>{subtitle}</p>
		</div>
	);
};

export default Card;
