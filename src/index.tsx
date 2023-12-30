import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.module.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<React.StrictMode><App /></React.StrictMode>);
