import React from 'react';
import { IconContext } from 'react-icons';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

type Props = {
	children: JSX.Element;
};

function Layout(props: Props): JSX.Element {
	const { children } = props;
	return (
		<IconContext.Provider value={{ className: 'icons-react' }}>
			<Header />
			{children}
			<Footer />
		</IconContext.Provider>
	);
}

export { Layout };
