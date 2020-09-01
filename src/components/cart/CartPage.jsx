import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Products from './container/Products';
import CheckoutSuccessful from './components/CheckoutSuccessful';
import ClearCart from './container/ClearCart';

const Container = styled.div`
	.btn {
		border-radius: 0;
		line-height: 50%;
		font-size: .8rem;
	}

	.btn-dark {
		background-color: #070707;

		&:hover {
	    	background-color: #1a1a1a;
		}
	}
`;

const CartPage = ({ productsCart, checkoutSuccessful, setCheckoutSuccessful }) => (
	<div className="d-flex flex-column align-items-center">
		<h2>Cart</h2>

		<p>This is the Cart Page.</p>
		
		<Container className="container">
			{
				productsCart.length === 0 ? <div className="d-flex flex-column">
					<p className="text-center mb-3 mt-4">Your cart is empty</p>

					{ checkoutSuccessful ? <CheckoutSuccessful /> : null }
				</div>
				: <div className="row mt-5">
					<div className="col-12 col-sm-8">
						<Products 
							productsCart={productsCart}
						/>
					</div>

					<div className="col-12 col-sm-4">
						<ClearCart
							productsCart={productsCart} 
							setCheckoutSuccessful={setCheckoutSuccessful}
						/>
					</div>
				</div>
			}
		</Container>
	</div>
)

CartPage.propTypes = {
	productsCart: PropTypes.array, 
	checkoutSuccessful: PropTypes.bool, 
	setCheckoutSuccessful: PropTypes.func
}

CartPage.defaultProps = {
	productsCart: [], 
	checkoutSuccessful: false, 
}

export default CartPage;