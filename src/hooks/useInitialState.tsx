import { useEffect, useReducer } from 'react';
import { Manga } from 'constants/types/mangas';
import { useParams } from 'react-router-dom';
// Types
type Initial = {
	dataManga: Manga | null;
};
type ActionType = {
	queryDataManga: string;
};
type Action = {
	type: string;
	payload: Manga;
};
type Page = {
	page: string;
};

// Estado inicial
const initialState: Initial = {
	dataManga: null,
};
// Action Types
const actionType: ActionType = {
	queryDataManga: 'query data from api',
};

// ObjectReducer
const objectReducer = (state: Initial, payload: Manga) => ({
	[actionType.queryDataManga]: {
		...state,
		dataManga: payload,
	},
});
// Función reductora
function reducer(state: Initial, action: Action): Initial {
	return objectReducer(state, action.payload)[action.type] || state;
}

function useInitialState() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { dataManga } = state;
	const param: Page = useParams();
	const page: number = parseInt(param.page, 10);

	useEffect(() => {
		async function query(): Promise<void> {
			const response = await fetch(
				`https://api.jikan.moe/v4/manga?page=${page}&q${'berserk'}`
			);
			/* const response = await fetch(
				`https://api.jikan.moe/v4/anime?page=${page}`
			); */
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
	}, []);
	return {
		dataManga,
	};
}

export { useInitialState };
