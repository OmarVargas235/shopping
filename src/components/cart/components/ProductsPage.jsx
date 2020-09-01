import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as PlusIcon } from '../../../assets/iconos/plus.svg';
import { ReactComponent as MinusIcon } from '../../../assets/iconos/minus.svg';
import { ReactComponent as PaperIcon } from '../../../assets/iconos/paperBin.svg';

const Container = styled.div`
	.products__title {
		font-size: 1.4rem;
	}

	.products__price {
		font-size: 1.05rem;
	}

	.btn-danger {
		background-color: #dc3545;

		&:hover {
			background-color: #DD4755;
			border: 1px solid #DD4755;
		}
	}
`;

const ProductsPage = props => {

	const { 
		products, 
		contProducts, 
		saveLocalStorage,
		setProductsContext,
		setRemoveLS 
	} = props;

	return (
		<Container>
			{
				products.map((el, index) => (
					<div className="row mb-3 mb-md-0" key={el.id}>
						<div className="col-6 col-md-2 mb-4">
							<img src={el.img} alt={el.name} className="img-fluid" />
						</div>

						<div className="col-6 col-md-3 mb-4 text-center d-flex flex-column justify-content-center">
							<p className="products__title mb-2">{el.name}</p>
							<div className="products__price">
								<p className="mb-1">Price:</p>
								<p>$ {el.price}</p>
							</div>
						</div>
			
						<div className="col-6 col-md-3 mb-4 text-center">
							Qty: {contProducts[index].cont}
						</div>

						<div className="col-6 col-md-4 mb-4 text-center">
							<button 
								className="btn btn-lg btn-dark mr-2"
								onClick={ () => {
									saveLocalStorage(el);
									setProductsContext(el);
								} }
							> <PlusIcon /> </button>
							<button 
								className="btn btn-lg btn-danger"
								onClick={ () => {
									setRemoveLS(el);
									setProductsContext(el, 'minus');
								}}
							> 
								{contProducts[index].cont > 1 ? <MinusIcon /> : <PaperIcon />}
							</button>
						</div>
					</div>
				))
			}	
		</Container>
	)
}

ProductsPage.propTypes = {
	products: PropTypes.array, 
	contProducts: PropTypes.array, 
	saveLocalStorage: PropTypes.func,
	setProductsContext: PropTypes.func,
	setRemoveLS: PropTypes.func
}

ProductsPage.defaultProps = {
	products: [], 
	contProducts: [], 
}

export default ProductsPage;