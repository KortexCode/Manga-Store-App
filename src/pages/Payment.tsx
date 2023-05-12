import React, { MouseEventHandler, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/Payment.scss';

function Payment(): JSX.Element {
	const { cart } = useContext(AppContext);
	const history = useHistory();
	// Cálcula el total de los elementos agregados
	const total = cart.reduce(
		(prevItem, currentItem) => currentItem.price + prevItem,
		0
	);
	const onFinishPayment: MouseEventHandler<HTMLButtonElement> = () => {
		history.push('/checkout/success');
	};

	return (
		<div className='Payment'>
			<div className='Payment-content'>
				<h3>Order Summary:</h3>
				{cart.map(item => (
					<div className='Payment-element' key={item.title}>
						<h4>{item.title}</h4>
						<span>$ {item.price}</span>
					</div>
				))}

				<div className='Payment-element'>
					<h4>title</h4>
					<span>$price</span>
				</div>

				<div className='Payment__total'>
					<span>${total}</span>
				</div>
				<button
					type='button'
					className='Payment__button'
					onClick={onFinishPayment}
				>
					Finish Payment
				</button>
			</div>
		</div>
	);
}

export { Payment };
