import React from 'react';
import { HiXCircle } from 'react-icons/hi';
import '../styles/CheckoutItem.scss';

function CheckoutItem(): JSX.Element {
	return (
		<div className='Checkout__item'>
			<div className='Checkout__item-name-container'>
				<p className='Checkout__item-name'>
					Manga:<span className='Checkout__items'>Name item</span>
				</p>
			</div>
			<div className='Checkout__item-price-container'>
				<span className='Checkout__item-price'>100$</span>
				<HiXCircle size={20} />
			</div>
		</div>
	);
}

export { CheckoutItem };
