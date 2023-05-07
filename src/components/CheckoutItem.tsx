import React from 'react';
import { HiXCircle } from 'react-icons/hi';
import '../styles/CheckoutItem.scss';

function CheckoutItem(): JSX.Element {
	return (
		<div className='CheckoutItem'>
			<div className='CheckoutItem__container'>
				<img className='CheckoutItem__img' src='' alt='manga' />
				<p className='CheckoutItem__name'>kotkuri no nakama inai desu kanojo</p>
			</div>
			<div className='CheckoutItem__price-container'>
				<span className='CheckoutItem__price'>$100</span>
				<HiXCircle size={25} />
			</div>
		</div>
	);
}

export { CheckoutItem };
