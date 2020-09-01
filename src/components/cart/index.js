import React from 'react';
import { ProductsContext } from '../../Context/productsContext';
import CartPage from './CartPage';

class Cart extends React.Component {

	state = {
		checkoutSuccessful: false,
	} 

	setCheckoutSuccessful = () => {
		this.setState({
			...this.state,
			checkoutSuccessful: true,
		});
	}
	
	render() {
		const { checkoutSuccessful } = this.state;

		return (
			<ProductsContext.Consumer>
				{value => {
					const { products } = value;

					return (
						<CartPage 
							productsCart={products}
							checkoutSuccessful={checkoutSuccessful}
							setCheckoutSuccessful={this.setCheckoutSuccessful}
						/>
					)
				}}
			</ProductsContext.Consumer>
		)
	}
}

export default Cart;