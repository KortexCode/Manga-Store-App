import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

type Props = {
	children: JSX.Element;
};

function Layout(props: Props): JSX.Element {
	const { children } = props;
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export { Layout };
