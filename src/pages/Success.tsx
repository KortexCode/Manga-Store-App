import React from 'react';
import { Map } from '../components/Map';
import '../styles/Success.scss';

function Success(): JSX.Element {
	return (
		<div className='Success'>
			<div className='Success-content'>
				<h2 className='title'>Gracias por tu compra</h2>

				<p>Your order will arrive in 3 days:</p>

				<Map />
			</div>
		</div>
	);
}

export { Success };
