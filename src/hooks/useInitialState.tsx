import { useEffect, useReducer } from 'react';
import { Manga } from 'constants/types/mangas';
// Types
type Initial = {
	dataManga: Manga | null;
	search: string;
};
type ActionType = {
	queryDataManga: string;
	makeASearch: string;
};
type Action = {
	type: string;
	payload: Manga;
};
type Payload = Manga | string;

// Estado inicial
const initialState: Initial = {
	dataManga: null,
	search: '',
};
// Action Types
const actionType: ActionType = {
	queryDataManga: 'query data from api',
	makeASearch: 'make a search',
};

// ObjectReducer
const objectReducer = (state: Initial, payload: Payload) => ({
	[actionType.queryDataManga]: {
		...state,
		dataManga: typeof payload === 'object' ? payload : null,
	},
	[actionType.makeASearch]: {
		...state,
		search: typeof payload === 'string' ? payload : '',
	},
});
// Función reductora
function reducer(state: Initial, action: Action): Initial {
	return objectReducer(state, action.payload)[action.type] || state;
}

function useInitialState(Api: string) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { dataManga } = state;
	console.log('tipo', typeof dataManga);

	useEffect(() => {
		async function query(): Promise<void> {
			const response = await fetch(Api);
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			const resData: Manga = await response.json();
			dispatch({
				type: actionType.queryDataManga,
				payload: resData,
			});
		}
		query().catch(e => {
			console.error(e);
		});
	}, [Api]);
	return {
		dataManga,
	};
}

export { useInitialState };
