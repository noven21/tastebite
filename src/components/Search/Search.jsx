import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useSearched } from '../../hooks/useFetch';
import './Search.css';

const Search = () => {
	const { input, setInput, handleSubmit } = useSearched();

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
