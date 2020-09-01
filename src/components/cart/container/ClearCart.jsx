import React from 'react';
import PropTypes from 'prop-types';
import withProducts from '../../../hoc/withProducts';
import ClearCartPage from '../components/ClearCartPage';

class ClearCart extends React.Component {

	clearProducts = () => {
		const { setProductsContext, setRemoveLS } = this.props;
		
		setProductsContext(null, null, "clear");
		setRemoveLS(null, "clear");
	}

	render() {
		const { productsCart, setCheckoutSuccessful } = this.props;

		return (
			<ClearCartPage 
				products={productsCart}
				clearProducts={this.clearProducts}
				setCheckoutSuccessful={setCheckoutSuccessful}
			/>
		)
	}
}

ClearCart.propTypes = {
	productsCart: PropTypes.array, 
	setCheckoutSuccessful: PropTypes.func,
	setProductsContext: PropTypes.func,
	setRemoveLS: PropTypes.func
}

ClearCart.defaultProps = {
	productsCart: [], 
}

export default withProducts(ClearCart);