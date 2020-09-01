import React from 'react';
import NavbarPage from './NavbarPage';
import { ProductsContext } from '../../Context/productsContext';

class Navbar extends React.Component {
	
	render() {

		return (
			<ProductsContext.Consumer>
				{value => {
					const { products } = value;
					
					return (
						<NavbarPage 
							products={products}
						/>
					)
				}}
			</ProductsContext.Consumer>
		)
	}
}


export default Navbar;