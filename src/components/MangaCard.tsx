import React from 'react';
import { HiShoppingCart } from 'react-icons/hi';
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
			<footer className='MangaCard__footer'>
				<div className='MangaCard__title-container'>
					<h3 className='MangaCard__title'>{item?.title}</h3>
				</div>
				<div className='MangaCard__description-container'>
					<p className='MangaCard__gender'>{item?.demographics[0].name} </p>
					<p className='MangaCard__status'>{item?.status}</p>
					<p className='MangaCard__rank'>Score {item?.scored}</p>
				</div>
				<hr
					className='MangaCard__line'
					style={{
						width: '90%',
						height: '0.1px',
						margin: '0 auto',
					}}
					color='black'
				/>
				<div className='MangaCard__checkout'>
					<span className='MangaCard__checkout-price'>30$</span>
					<HiShoppingCart size={25} />
				</div>
			</footer>
		</article>
	);
}

export { MangaCard };
