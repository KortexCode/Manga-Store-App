import { useCallback, useEffect, useReducer } from 'react';
import { Datum, Manga } from 'constants/types/mangas';

// Types
type Initial = {
	dataManga: Datum[];
	search: string;
	cart: ProductInCart[];
	buyer: Buyer;
	loading: boolean;
};
type Buyer = {
	name: string;
	email: string;
	address: string;
	apto: string;
	city: string;
	country: string;
	state: string;
	cp: string;
	phone: string;
};
type ProductInCart = {
	title: string;
	img: string;
	price: number;
};
type ActionType = {
	queryDataManga: string;
	makeASearch: string;
	addToCart: string;
	removeFromCart: string;
	addBuyer: string;
	loadingState: string;
};
type Action = {
	type: string;
	payload: Payload;
};
type Payload =
	| Datum[]
	| string
	| ProductInCart
	| ProductInCart[]
	| Buyer
	| boolean;

// Estado inicial
const initialState: Initial = {
	dataManga: [],
	search: '',
	cart: [],
	loading: true,
	buyer: {
		name: '',
		email: '',
		address: '',
		apto: '',
		city: '',
		country: '',
		state: '',
		cp: '',
		phone: '',
	},
};

// Action Types
const actionType: ActionType = {
	queryDataManga: 'query data from api',
	makeASearch: 'make a search',
	addToCart: 'add to cart',
	removeFromCart: 'remove from cart',
	addBuyer: 'add buyer',
	loadingState: 'loading state',
};

const objectReducer = (state: Initial, payload: Payload) => ({
	[actionType.queryDataManga]: {
		...state,
		dataManga: payload as Datum[],
	},
	[actionType.makeASearch]: {
		...state,
		search: payload as string,
	},
	[actionType.addToCart]: {
		...state,
		cart: [...state.cart, payload] as ProductInCart[],
	},
	[actionType.removeFromCart]: {
		...state,
		cart: payload as ProductInCart[],
	},
	[actionType.addBuyer]: {
		...state,
		buyer: payload as Buyer,
	},
	[actionType.loadingState]: {
		...state,
		loading: payload as boolean,
	},
});

// Función reductora
function reducer(state: Initial, action: Action): Initial {
	return objectReducer(state, action.payload)[action.type] || state;
}

function useInitialState(Api: string) {
	const [state, dispatch] = useReducer(reducer, initialState);

	const { dataManga, cart, buyer, search, loading } = state;
	// Manejadores de estado
	const handleAddToCart = (item: ProductInCart) => {
		dispatch({
			type: actionType.addToCart,
			payload: item,
		});
	};
	const handleRemoveFromCart = (title: string) => {
		const newList = cart.filter(item => item.title !== title);

		dispatch({
			type: actionType.removeFromCart,
			payload: newList,
		});
	};
	const handleToSearch = useCallback(
		(query: string) => {
			dispatch({
				type: actionType.makeASearch,
				payload: query,
			});
		},
		[search]
	);
	const handleAddBuyer = (item: Buyer) => {
		dispatch({
			type: actionType.addBuyer,
			payload: item,
		});
	};
	const handleLoadingState = (loadingState: boolean) => {
		dispatch({
			type: actionType.loadingState,
			payload: loadingState,
		});
	};

	// Filtro de búsquedas
	const filterMangas = dataManga.filter(item =>
		item.title.toLowerCase().includes(search.toLowerCase())
	);

	// Consultas a la Api
	useEffect(() => {
		async function query(): Promise<void> {
			const response = await fetch(Api);
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			const resData: Manga = await response.json();
			dispatch({
				type: actionType.queryDataManga,
				payload: resData.data,
			});
			handleLoadingState(false);
		}
		query().catch(e => {
			console.error(e);
		});
	}, [Api]);
	return {
		filterMangas,
		cart,
		buyer,
		loading,
		handleLoadingState,
		handleAddToCart,
		handleRemoveFromCart,
		handleAddBuyer,
		handleToSearch,
	};
}

export { useInitialState };
