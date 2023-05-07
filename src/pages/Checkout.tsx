import React from 'react';
import { CheckoutItem } from '../components/CheckoutItem';
import '../styles/Checkout.scss';

function Checkout(): JSX.Element {
	return (
		<section className='Checkout'>
			<div className='Checkout__orders-container'>
				<div>
					<h3 className='Checkout__orders-title'>Shooping Cart</h3>
				</div>
				<div className='Checkout__item-list'>
					<CheckoutItem />
					<CheckoutItem />
					<CheckoutItem />
					<CheckoutItem />
				</div>
				<div className='Checkout__total-container'>
					<h3 className='Checkout__total'>Total</h3>
					<span>$100</span>
				</div>
				<button className='Checkout__purchase-btn' type='button'>
					<p>Continue to pay</p>
				</button>
			</div>
		</section>
	);
}

export { Checkout };
