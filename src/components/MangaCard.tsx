import React, { MouseEventHandler } from 'react';
import { HiShoppingCart, HiOutlinePlusSm } from 'react-icons/hi';
import { Datum } from '../constants/types/mangas';
import '../styles/MangaCard.scss';

type ProductInCart = {
	title: string;
	img: string;
	price: number;
};
type Props = {
	item: Datum;
	handleAddToCart: (arg: ProductInCart) => void;
};
function ramdonNum(min: number, max: number): number {
	return Math.round(Math.random() * (max - min) + min);
}
function MangaCard(props: Props) {
	const { item, handleAddToCart } = props;
	const mangaPrice = ramdonNum(30, 60);
	const onAddToCart: MouseEventHandler<HTMLButtonElement> = () => {
		const product: ProductInCart = {
			title: item.title,
			img: item.images.jpg.image_url,
			price: mangaPrice,
		};
		handleAddToCart(product);
	};
	return (
		<article className='MangaCard'>
			<img
				className='MangaCard__img'
				src={item.images.jpg.image_url}
				alt={item.title}
			/>
			<footer className='MangaCard__footer'>
				<div className='MangaCard__title-container'>
					<h3 className='MangaCard__title'>{item.title}</h3>
					<span className='MangaCard__checkout-price'>{mangaPrice}$</span>
				</div>
				<div className='MangaCard__checkout'>
					<button
						type='button'
						className='MangaCard__checkout-btn'
						onClick={onAddToCart}
					>
						<div className='MangaCard__checkout-plus'>
							<HiOutlinePlusSm size={20} />
						</div>
						<span>
							<HiShoppingCart size={25} />
						</span>
					</button>
				</div>
			</footer>
		</article>
	);
}

export { MangaCard };
