import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Search.css';

const Search = () => {
	const [input, setInput] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(input);

		navigate('/explore-recipe/searched/' + input);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className='search'>
				<FaSearch style={{ cursor: 'pointer' }} />
				<input
					onChange={(e) => setInput(e.target.value)}
					type='text'
					value={input}
					placeholder='Search Recipe..'
				/>
			</div>
		</form>
	);
};

export default Search;
