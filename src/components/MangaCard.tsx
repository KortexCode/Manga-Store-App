import React from 'react';
import { Datum } from '../constants/types/mangas';
import '../styles/MangaCard.scss';

type Props = {
	item: Datum | null;
};

function MangaCard(props: Props) {
	const { item } = props;
	return (
		<article className='MangaCard'>
			<img
				className='MangaCard__img'
				src={item?.images.jpg.image_url}
				alt={item?.title}
			/>
			<div className='MangaCard__description-container'>
				<p className='MangaCard__title'>{item?.title}</p>
				<p className='MangaCard__rank'>Rank</p>
			</div>
		</article>
	);
}

export { MangaCard };
