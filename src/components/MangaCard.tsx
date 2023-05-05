import React from 'react';
import { Datum } from '../constants/mangas';

type Props = {
	item: Datum | null;
};

function MangaCard(props: Props) {
	const { item } = props;
	return (
		<article className='MangaCard'>
			<img className='MangaCard__img' src='' alt='Manga' />
			<div className='MangaCard__description'>
				<p className='MangaCard__title'>{item?.title}</p>
				<p className='MangaCard__rank'>Rank</p>
			</div>
		</article>
	);
}

export { MangaCard };
