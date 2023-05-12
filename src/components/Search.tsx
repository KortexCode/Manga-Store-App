import React, { ChangeEventHandler, memo } from 'react';
import { HiSearch } from 'react-icons/hi';
import '../styles/Search.scss';

type Props = {
	handleToSearch: (arg: string) => void;
};

const Search = memo((props: Props) => {
	const { handleToSearch } = props;
	const onTextChange: ChangeEventHandler<HTMLInputElement> = event => {
		handleToSearch(event.target.value);
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
});

export { Search };
