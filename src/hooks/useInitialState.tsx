import { useEffect, useReducer } from 'react';
import { Datum, Manga } from 'constants/types/mangas';

// Types
type Initial = {
	dataManga: Datum[];
	search: string;
	cart: ProductInCart[];
	buyer: Buyer[];
};
type Buyer = {
	name: FormDataEntryValue | null;
	email: FormDataEntryValue | null;
	address: FormDataEntryValue | null;
	apto: FormDataEntryValue | null;
	city: FormDataEntryValue | null;
	country: FormDataEntryValue | null;
	state: FormDataEntryValue | null;
	cp: FormDataEntryValue | null;
	phone: FormDataEntryValue | null;
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
};
type Action = {
	type: string;
	payload: Payload;
};
type Payload = Datum[] | string | ProductInCart | ProductInCart[] | Buyer;

// Estado inicial
const initialState: Initial = {
	dataManga: [],
	search: '',
	cart: [],
	buyer: [],
};

// Action Types
const actionType: ActionType = {
	queryDataManga: 'query data from api',
	makeASearch: 'make a search',
	addToCart: 'add to cart',
	removeFromCart: 'remove from cart',
	addBuyer: 'add buyer',
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
		buyer: [...state.buyer, payload] as Buyer[],
	},
});

// Función reductora
function reducer(state: Initial, action: Action): Initial {
	return objectReducer(state, action.payload)[action.type] || state;
}

function useInitialState(Api: string) {
	const [state, dispatch] = useReducer(reducer, initialState);

	const { dataManga, cart, buyer } = state;
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
	const handleToSearch = (query: string) => {
		dispatch({
			type: actionType.makeASearch,
			payload: query,
		});
	};
	const handleAddBuyer = (item: Buyer) => {
		dispatch({
			type: actionType.addBuyer,
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
		cart,
		buyer,
		handleAddToCart,
		handleRemoveFromCart,
		handleAddBuyer,
		handleToSearch,
	};
}

export { useInitialState };
