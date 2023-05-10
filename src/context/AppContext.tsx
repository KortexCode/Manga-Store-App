import React from 'react';
import { useInitialState } from '../hooks/useInitialState';

const AppContext = React.createContext(
	{} as ReturnType<typeof useInitialState>
);

export { AppContext };
