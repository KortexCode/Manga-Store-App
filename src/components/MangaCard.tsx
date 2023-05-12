import React, { MouseEventHandler, useEffect, useRef } from 'react';
import { HiShoppingCart, HiOutlinePlusSm } from 'react-icons/hi';
import { useObserver } from '../hooks/useObserver';
import { Datum } from '../constants/types/mangas';
import '../styles/MangaCard.scss';

const BG_IMG =
	'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=';
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
	const node = useRef<HTMLImageElement>(null);
	useEffect(() => {
		const url = item.images.jpg.image_url;
		const observer: IntersectionObserver = useObserver(url);
		const imgNode = node.current as Element;
		observer.observe(imgNode);

		return () => {
			observer.disconnect();
		};
	}, []);
	return (
		<article className='MangaCard'>
			<img
				ref={node}
				className='MangaCard__img'
				src={BG_IMG}
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
