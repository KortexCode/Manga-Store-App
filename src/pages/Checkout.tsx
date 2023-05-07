import React from 'react';
import { CheckoutItem } from '../components/CheckoutItem';
import '../styles/Checkout.scss';

function Checkout(): JSX.Element {
	return (
		<section className='Checkout'>
			<div className='Checkout__orders-container'>
				<h3 className='Checkout__orders-title'>Shooping Cart</h3>
				<div className='Checkout__item-list'>
					<CheckoutItem />
				</div>
				<div className='Checkout__purchase-container'>
					<h3 className='Checkout__total'>Total: 50$</h3>
					<button className='Checkout__purchase-btn' type='button'>
						Purchase
					</button>
				</div>
			</div>
		</section>
	);
}

export { Checkout };
