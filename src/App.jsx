import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './assets/styles/bootstrap.min.css';
import styled from 'styled-components';
import ProductsProvider from './Context/productsContext';

import Navbar from './components/navbar/';
import Store from './components/store/';
import About from './components/about/';
import Cart from './components/cart/';

const BodyApp = styled.div`
	font-family: 'Roboto', sans-serif;
`;

const App = () => (
	<BodyApp>
		<Router>
			<ProductsProvider>
				<Navbar />
				
				<Switch>
					<Route path="/home" component={ Store } />
					<Route path="/about" component={ About } />
					<Route path="/cart" component={ Cart } />
					
					<Redirect from='/' to="/home" />
				</Switch>
			</ProductsProvider>


			<div className="container">
				<footer className="text-center py-4">2020 © React Store, By Omar Vargas</footer>
			</div>
		</Router>
	</BodyApp>
);

export default App;