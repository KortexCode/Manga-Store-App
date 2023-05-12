import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Map } from '../components/Map';
import '../styles/Success.scss';
import { AppContext } from '../context/AppContext';

function Success(): JSX.Element {
	const { cart, buyer } = useContext(AppContext);
	const history = useHistory();
	if (cart.length === 0) {
		history.push('/checkout');
	}
	return (
		<div className='Success'>
			<div className='Success-content'>
				<h2 className='title'>{`${buyer.name} Gracias por tu compra`}</h2>

				<p>Your order will arrive in 3 days:</p>

				<Map />
			</div>
		</div>
	);
}

export { Success };
