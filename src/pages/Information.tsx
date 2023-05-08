import React from 'react';
import '../styles/Information.scss';
import { Link } from 'react-router-dom';

function Information(): JSX.Element {
	return (
		<section className='Information'>
			<div className='Information-content'>
				<div className='Information-head'>
					<h2>Contact Information:</h2>
				</div>
				<section className='Information-form'>
					<form action=''>
						<input type='text' placeholder='Full name' name='name' />
						<input type='text' placeholder='Email' name='email' />
						<input type='text' placeholder='Direction' name='addres' />
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
						<button type='button'>Pay</button>
					</Link>
				</div>
			</div>
			<section className='Information-sidebar'>
				<h3>Order Info:</h3>
				<div className='Information-item'>
					<div className='Information-element'>
						<h4>Articles</h4>
						<span>10</span>
					</div>
					<div className='Information-element'>
						<h4>Total</h4>
						<span>$200</span>
					</div>
				</div>
			</section>
		</section>
	);
}

export { Information };
