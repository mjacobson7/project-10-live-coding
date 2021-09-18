import './App.css';
import React, { useState, useEffect } from 'react';
import Input from './Input';
import Button from './Button';
import api from './api/api';
import Card from './Card';
import Spinner from './Spinner';

function App() {
	const [searchQuery, setSearchQuery] = useState('');
	const [cards, setCards] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (searchQuery !== '') {
			setIsLoading(true);

			api.search(searchQuery).then((data) => {
				setCards(
					data.results.map((item) => ({
						id: item.id,
						src: item.urls.regular,
						alt: item.alt_description,
						title: item.description,
						subtitle: item.user.name,
					}))
				);
				setIsLoading(false);
			});
		}
	}, [searchQuery]);

	const handleClick = () => {
		setSearchQuery('trinidad');
	};

	return (
		<div className='App'>
			<div className='App-content'>
				<div className='App-search'>
					<Input placeholder='Search' />
					<Button title='Search' handleClick={handleClick} />
				</div>
				<div className='App-cards'>
					{isLoading ? (
						<Spinner />
					) : (
						cards.map((data) => <Card key={data.id} {...data} />)
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
