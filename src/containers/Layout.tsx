import React, { useMemo } from 'react';
import { IconContext } from 'react-icons';
import { useParams } from 'react-router-dom';
import { useInitialState } from '../hooks/useInitialState';
import { Header } from '../components/Header';
import { AppContext } from '../context/AppContext';

type Page = {
	page: string;
};

type Props = {
	children: JSX.Element;
};

function Layout(props: Props): JSX.Element {
	const { children } = props;
	const param: Page = useParams();
	let Api = '';
	if (param.page) {
		Api = `https://api.jikan.moe/v4/manga?page=${parseInt(param.page, 10)}`;
	} else {
		Api = `https://api.jikan.moe/v4/manga?page=1`;
	}
	const globalState = useInitialState(Api);
	const styleValue = useMemo(() => ({ className: 'icons-react' }), []);
	return (
		<AppContext.Provider value={globalState}>
			<IconContext.Provider value={styleValue}>
				<Header />
				<main>{children}</main>
			</IconContext.Provider>
		</AppContext.Provider>
	);
}

export { Layout };
