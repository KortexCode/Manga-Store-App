import React, { useMemo } from 'react';
import { IconContext } from 'react-icons';
import { useLocation } from 'react-router-dom';
import { useInitialState } from '../hooks/useInitialState';
import { Header } from '../components/Header';
import { AppContext } from '../context/AppContext';

type Props = {
	children: JSX.Element;
};

function Layout(props: Props): JSX.Element {
	const { children } = props;
	const location = useLocation();
	// Se verifica la url actual para extraer el id de la página
	const array = location.pathname.split('/');
	const [, page, id] = array;
	// Se pasa a entero para verificar si el id es realmente un número
	const idPage = parseInt(id, 10);
	let Api = '';
	if (page === 'page' && typeof idPage === 'number') {
		Api = `https://api.jikan.moe/v4/manga?${page}=${id}`;
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
