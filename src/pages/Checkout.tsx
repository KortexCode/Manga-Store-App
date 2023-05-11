import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { CheckoutItem } from '../components/CheckoutItem';
import '../styles/Checkout.scss';

function Checkout(): JSX.Element {
	const { cart, handleRemoveFromCart } = useContext(AppContext);
	// Cálcula el total de los elementos agregados
	const total = cart.reduce(
		(prevItem, currentItem) => currentItem.price + prevItem,
		0
	);

	const handleNavInfo = () => {};
	return (
		<section className='Checkout'>
			<div className='Checkout__orders-container'>
				<div>
					<h3 className='Checkout__orders-title'>Shooping Cart</h3>
					{cart.length <= 0 && (
						<span className='Checkout__message'>There is not orders...</span>
					)}
				</div>
				<div className='Checkout__item-list'>
					{cart.map(item => (
						<CheckoutItem
							key={item.title}
							title={item.title}
							price={item.price}
							img={item.img}
							handleRemoveFromCart={handleRemoveFromCart}
						/>
					))}
				</div>
				<div className='Checkout__total-container'>
					<h3 className='Checkout__total'>Total</h3>
					<span>${total}</span>
				</div>
				{cart.length > 0 && (
					<Link className='Checkout__purchase-link' to='checkout/information'>
						<button
							className='Checkout__purchase-btn'
							type='button'
							onClick={handleNavInfo}
						>
							Continue
						</button>
					</Link>
				)}
			</div>
		</section>
	);
}

export { Checkout };
