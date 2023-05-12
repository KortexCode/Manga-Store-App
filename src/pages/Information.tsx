import React, { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/Information.scss';

interface IFormInput {
	name: string;
	email: string;
	address: string;
	apto: string;
	city: string;
	country: string;
	state: string;
	cp: string;
	phone: string;
}

function Information(): JSX.Element {
	const { cart, handleAddBuyer } = useContext(AppContext);
	const { register, handleSubmit } = useForm<IFormInput>();
	const history = useHistory();
	if (cart.length <= 0) {
		history.goBack();
	}
	const onSubmit: SubmitHandler<IFormInput> = data => {
		handleAddBuyer(data);
		history.push('/checkout/payment');
	};

	// Cálcula el total de los elementos agregados
	const total = cart.reduce(
		(prevItem, currentItem) => currentItem.price + prevItem,
		0
	);

	return (
		<section className='Information'>
			<div className='Information-content'>
				<div className='Information-buttons'>
					<Link to='/checkout' className='Information-back'>
						<button type='button'>Back</button>
					</Link>
				</div>
				<div className='Information-head'>
					<h2>Contact Information:</h2>
				</div>
				<section className='Information-form'>
					<form onSubmit={handleSubmit(onSubmit)}>
						<input type='text' placeholder='Full name' {...register('name')} />
						<input type='text' placeholder='Email' {...register('email')} />
						<input
							type='text'
							placeholder='Direction'
							{...register('address')}
						/>
						<input type='text' placeholder='apto' {...register('apto')} />
						<input type='text' placeholder='City' {...register('city')} />
						<input type='text' placeholder='Country' {...register('country')} />
						<input type='text' placeholder='State' {...register('state')} />
						<input type='text' placeholder='Postal Code' {...register('cp')} />
						<input type='text' placeholder='Phone' {...register('phone')} />
						<button type='submit' className='Information-next'>
							Pay
						</button>
					</form>
				</section>
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
