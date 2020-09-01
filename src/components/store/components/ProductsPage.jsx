import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonAddCartPage from './ButtonAddCartPage';

const Card = styled.div`
	img {
		width: 50%;
	}

	.card__text {
		font-size: 1.1rem;
	}

	.btn {
		font-size: 11px;
		padding: 8px 16px;
	}

	.btn-link {
		color: #464646!important;
	}
`;

const ProductsPage = ({ data }) => (
	<Card className="row">
		{
			data.map(el => (
				<div className="col-12 col-sm-6 col-lg-4 mb-4" key={el.id}>
					<div className="card">
						<img src={el.img} alt={el.name} className="card-img-top img-fluid mx-auto" />

						<div className="card-body">
							<p className="card__text">{el.name}</p>
							<p>$ {el.price}</p>
							
							<div className="d-flex justify-content-end">
								<button className="btn mr-1 btn-link">DETAILS</button>
								<ButtonAddCartPage el={el} />
							</div>
						</div> 
					</div>
				</div>
			))
		}
	</Card>
)

ProductsPage.propTypes = {
	data: PropTypes.array, 
}

ProductsPage.defaultProps = {
	data: [], 
}

export default ProductsPage;