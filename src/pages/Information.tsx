import React, { useContext, useRef } from 'react';
import '../styles/Information.scss';
import { Link, useHistory } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

function Information(): JSX.Element {
	const { cart, handleAddBuyer } = useContext(AppContext);
	const history = useHistory();
	if (cart.length <= 0) {
		history.goBack();
	}
	const node = useRef<HTMLFormElement>(null);
	const formNode = (node.current as HTMLFormElement) || undefined;

	const onPay = () => {
		const formData = new FormData(formNode);
		const buyer = {
			name: formData.get('name'),
			email: formData.get('email'),
			address: formData.get('address'),
			apto: formData.get('apto'),
			city: formData.get('city'),
			country: formData.get('country'),
			state: formData.get('state'),
			cp: formData.get('cp'),
			phone: formData.get('phone'),
		};
		handleAddBuyer(buyer);
	};

	// Cálcula el total de los elementos agregados
	const total = cart.reduce(
		(prevItem, currentItem) => currentItem.price + prevItem,
		0
	);

	return (
		<section className='Information'>
			<div className='Information-content'>
				<div className='Information-head'>
					<h2>Contact Information:</h2>
				</div>
				<section className='Information-form'>
					<form ref={node}>
						<input type='text' placeholder='Full name' name='name' />
						<input type='text' placeholder='Email' name='email' />
						<input type='text' placeholder='Direction' name='address' />
						<input type='text' placeholder='apto' name='apto' />
						<input type='text' placeholder='City' name='city' />
						<input type='text' placeholder='Country' name='country' />
						<input type='text' placeholder='State' name='state' />
						<input type='text' placeholder='Postal Code' name='cp' />
						<input type='text' placeholder='Phone' name='phone' />
					</form>
				</section>
				<div className='Information-buttons'>
					<Link to='/checkout' className='Information-back'>
						<button type='button'>Back</button>
					</Link>

					<Link to='/checkout/payment' className='Information-next'>
						<button type='button' onClick={onPay}>
							Pay
						</button>
					</Link>
				</div>
			</div>
			<section className='Information-sidebar'>
				<h3>Order Info:</h3>
				<div className='Information-item'>
					<div className='Information-element'>
						<h4>Articles</h4>
						<span>{cart.length}</span>
					</div>
					<div className='Information-element'>
						<h4>Total</h4>
						<span>${total}</span>
					</div>
				</div>
			</section>
		</section>
	);
}

export { Information };
