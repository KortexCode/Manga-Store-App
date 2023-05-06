import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './routes/App';
import './styles/main.scss';

const nodeRoot: HTMLElement | null = document.getElementById('root');

const root = ReactDOM.createRoot(nodeRoot as Element);
root.render(<App />);
