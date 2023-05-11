import React from 'react';
import { HiXCircle } from 'react-icons/hi';
import '../styles/CheckoutItem.scss';

type Props = {
	title: string;
	price: number;
	img: string;
	handleRemoveFromCart: (arg: string) => void;
};
function CheckoutItem(props: Props): JSX.Element {
	const { title, price, img, handleRemoveFromCart } = props;

	const onRemoveItem = () => {
		handleRemoveFromCart(title);
	};
	return (
		<div className='CheckoutItem'>
			<div className='CheckoutItem__container'>
				<img className='CheckoutItem__img' src={img} alt='manga' />
				<p className='CheckoutItem__name'>{title}</p>
			</div>
			<div className='CheckoutItem__price-container'>
				<span className='CheckoutItem__price'>${price}</span>
				<button
					type='button'
					className='Checkout__btn-remove'
					onClick={onRemoveItem}
				>
					<HiXCircle size={25} />
				</button>
			</div>
		</div>
	);
}

export { CheckoutItem };
