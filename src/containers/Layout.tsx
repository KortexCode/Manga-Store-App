import React, { useMemo } from 'react';
import { IconContext } from 'react-icons';
import { Header } from '../components/Header';

type Props = {
	children: JSX.Element;
};

function Layout(props: Props): JSX.Element {
	const { children } = props;
	const styleValue = useMemo(() => ({ className: 'icons-react' }), []);

	return (
		<IconContext.Provider value={styleValue}>
			<Header />
			<main>{children}</main>
		</IconContext.Provider>
	);
}

export { Layout };
