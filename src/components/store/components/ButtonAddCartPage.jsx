import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withProducts from '../../../hoc/withProducts';

const Button = styled.div`
	.btn--add_to_card {
		background-color: #1a1a1a;
    	color: #fff;
    	border-radius: 0;

    	&:hover {
    		background-color: #070707;
    	}
	}

	.btn--add_to_more {
		background-color: transparent;
    	color: black;
    	border: 2px solid #070707;
    	border-radius: 0;
    	box-shadow: none;
	}
`;

const ButtonAddCartPage = ({el, products:arrProducts, setProducts:saveLocalStorage,setProductsContext}) => (
	<Button>
		<button 
			className={`btn ${arrProducts.some(product => product.id === el.id) 
				? 'btn--add_to_more' : 'btn--add_to_card' }`}
			onClick={ () => {
				saveLocalStorage(el);
				setProductsContext(el);
			} }
		>
			{ 
				arrProducts.some(product => product.id === el.id)
				? <span>ADD MORE</span>
				: <span>ADD TO CART</span>
			}
		</button>
	</Button>
)

ButtonAddCartPage.propTypes = {
	el: PropTypes.object, 
	arrProducts: PropTypes.array, 
	saveLocalStorage: PropTypes.func, 
	setProductsContext: PropTypes.func, 
}

ButtonAddCartPage.defaultProps = {
	el: [], 
	arrProducts: [], 
}

export default withProducts(ButtonAddCartPage);