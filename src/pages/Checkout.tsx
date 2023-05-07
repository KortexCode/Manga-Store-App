import React from 'react';
import { CheckoutItem } from '../components/CheckoutItem';
import '../styles/Checkout.scss';

function Checkout(): JSX.Element {
	return (
		<section className='Checkout'>
			<div className='Checkout__orders-container'>
				<div>
					<h3 className='Checkout__orders-title'>Shooping Cart</h3>
					{/* <hr
						style={{
							width: '100%',
							height: '0.1px',
							margin: '0 auto',
						}}
						color='black'
					/> */}
				</div>
				<div className='Checkout__item-list'>
					<CheckoutItem />
					<CheckoutItem />
					<CheckoutItem />
					<CheckoutItem />
					{/* <CheckoutItem />
					<CheckoutItem />
					<CheckoutItem />
					<CheckoutItem />
					<CheckoutItem />
					<CheckoutItem />
					<CheckoutItem />
					<CheckoutItem /> */}
				</div>
				<h3 className='Checkout__total'>Total: 50$</h3>
				<button className='Checkout__purchase-btn' type='button'>
					Purchase
				</button>
				{/* <div className='Checkout__purchase-container'>
				</div> */}
			</div>
		</section>
	);
}

export { Checkout };
