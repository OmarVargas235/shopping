import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
	.checkout {
		color: #4bbf73;
	}

	.btn--buy {
		border: 2px solid #4bbf73;
		font-size: .9rem;
		background-color: transparent;
		color: #4bbf73;

		&:hover {
			background-color: #4bbf73;
    		color: #fff;
		}

		&:focus {
			box-shadow: 0 0 0 0.2rem #37B161;
		}
	}
`;

const CheckoutSuccessful = () => (
	<Container className="text-center">
		<p className="checkout">Checkout successfull</p>

		<Link className="btn btn--buy py-3" to='/home'>BUY MORE</Link>
	</Container>
)

export default CheckoutSuccessful;