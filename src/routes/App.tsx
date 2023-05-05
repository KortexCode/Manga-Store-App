import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Checkout } from '../pages/Checkout';
import { Home } from '../pages/Home';
import { Payment } from '../pages/Payment';
import { Success } from '../pages/Success';
import { NotFound } from '../pages/NotFound';
import { Information } from '../pages/Information';
import { Layout } from '../containers/Layout';

function App(): JSX.Element {
	return (
		<HashRouter>
			<Layout>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/checkout' component={Checkout} />
					<Route exact path='/checkout/information' component={Information} />
					<Route exact path='/checkout/payment' component={Payment} />
					<Route exact path='/checkout/success' component={Success} />
					<Route exact component={NotFound} />
				</Switch>
			</Layout>
		</HashRouter>
	);
}

export { App };
