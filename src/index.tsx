import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from 'react-query';

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client = {client}>
    <BrowserRouter basename="/">
    <App />
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById('root')
);