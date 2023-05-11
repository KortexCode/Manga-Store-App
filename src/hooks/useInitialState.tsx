import { useEffect, useReducer } from 'react';
import { Datum, Manga } from 'constants/types/mangas';
// Types
type Initial = {
	dataManga: Datum[];
	search: string;
	cart: ProductInCart[];
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
};
type Action = {
	type: string;
	payload: Payload;
};
type Payload = Datum[] | string | ProductInCart;

// Estado inicial
const initialState: Initial = {
	dataManga: [],
	search: '',
	cart: [],
};

// Action Types
const actionType: ActionType = {
	queryDataManga: 'query data from api',
	makeASearch: 'make a search',
	addToCart: 'add to cart',
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
});
// Función reductora
function reducer(state: Initial, action: Action): Initial {
	return objectReducer(state, action.payload)[action.type] || state;
}

function useInitialState(Api: string) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { dataManga, cart } = state;
	console.log('tipo', cart);

	const handleAddToCart = (item: ProductInCart) => {
		dispatch({
			type: actionType.addToCart,
			payload: item,
		});
	};

	useEffect(() => {
		async function query(): Promise<void> {
			const response = await fetch(Api);
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			const resData: Manga = await response.json();
			dispatch({
				type: actionType.queryDataManga,
				payload: resData.data,
			});
		}
		query().catch(e => {
			console.error(e);
		});
	}, [Api]);
	return {
		dataManga,
		handleAddToCart,
	};
}

export { useInitialState };
