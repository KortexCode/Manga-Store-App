import React from 'react';
import { Link } from 'react-router-dom';
import { CheckoutItem } from '../components/CheckoutItem';
import '../styles/Checkout.scss';

function Checkout(): JSX.Element {
	const handleNavInfo = () => {};
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
				<Link className='Checkout__purchase-link' to='checkout/information'>
					<button
						className='Checkout__purchase-btn'
						type='button'
						onClick={handleNavInfo}
					>
						Continue
					</button>
				</Link>
			</div>
		</section>
	);
}

export { Checkout };
