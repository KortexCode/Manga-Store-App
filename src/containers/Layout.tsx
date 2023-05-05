import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import React, { Children } from 'react';

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
