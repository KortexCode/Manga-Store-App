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
			<Switch>
				<Route path='/'>
					<Layout>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route path='/page/:page' component={Home} />
							<Route exact path='/checkout' component={Checkout} />
							<Route path='/checkout/information' component={Information} />
							<Route path='/checkout/payment' component={Payment} />
							<Route path='/checkout/success' component={Success} />
							<Route component={NotFound} />
						</Switch>
					</Layout>
				</Route>
			</Switch>
			{/* <Layout>

			</switch>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/page/:page' component={Home} />
					<Route exact path='/checkout' component={Checkout} />
					<Route path='/checkout/information' component={Information} />
					<Route path='/checkout/payment' component={Payment} />
					<Route path='/checkout/success' component={Success} />
					<Route component={NotFound} />
				</Switch>
			</Layout> */}
		</HashRouter>
	);
}

export { App };
