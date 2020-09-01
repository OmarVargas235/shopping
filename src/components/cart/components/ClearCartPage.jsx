import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
	.card-footer {
		background-color: white;
	}

	.btn--checkout {
		padding-top: 18px;
		padding-bottom: 18px;
	}

	.btn--clear {
		color: #464646;

		&:focus {
			box-shadow: none;
		}
	}
`;

const ClearCartPage = ({ products, clearProducts, setCheckoutSuccessful }) => (
	<Container className="card">
		<div className="card-body text-center text-md-left">
			<p>Total Items</p>
			<p>{products.length}</p>
			<p>Total Payment</p>
			<p>$ {(products.reduce((acum, el) => acum += el.price, 0)).toFixed(2)}</p>
		</div>
		
		<div className="card-footer text-center d-flex flex-column align-items-center">
			<button 
				className="btn btn-lg btn-dark mb-2 btn--checkout px-4"
				onClick={ () => {
					clearProducts();
					setCheckoutSuccessful();
				} }
			>CHECKOUT</button>
			<button 
				className="btn btn-lg btn-link btn--clear"
				onClick={ clearProducts }
			>CLEAR</button>
		</div>
	</Container>
)

ClearCartPage.propTypes = {
	products: PropTypes.array, 
	clearProducts: PropTypes.func,
	setCheckoutSuccessful: PropTypes.func,
}

ClearCartPage.defaultProps = {
	products: [], 
}

export default ClearCartPage;