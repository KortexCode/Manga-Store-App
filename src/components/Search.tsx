import React, { ChangeEventHandler, useState } from 'react';
import { HiSearch } from 'react-icons/hi';
import '../styles/Search.scss';

type State = string;
function Search() {
	const [text, setText] = useState<State>('');
	console.log(text);
	const onTextChange: ChangeEventHandler<HTMLInputElement> = event => {
		setText(event.target.value);
	};

	return (
		<div className='Search'>
			<input
				className='Search__input'
				type='text'
				placeholder='Search a Manga'
				onChange={onTextChange}
			/>
			<span>
				<HiSearch size={26} />
			</span>
		</div>
	);
}

export { Search };
