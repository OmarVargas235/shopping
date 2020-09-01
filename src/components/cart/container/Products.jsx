import React from 'react';
import PropTypes from 'prop-types';
import ProductsPage from '../components/ProductsPage';
import withProducts from '../../../hoc/withProducts';
import { contProduct, addOrRemoveproducts } from '../../../utils/helper';

class Products extends React.Component {
	
	state = {
		products: [],
		contProducts: [],
	} 

	componentDidMount() {
		const { productsCart } = this.props;

		this.setState({
			...this.state,
			products: Object.values(addOrRemoveproducts(productsCart)),
			contProducts: Object.values(contProduct(productsCart)),
		});
	}

	componentDidUpdate(prevProps) {
		const { productsCart } = this.props;

		if (productsCart.length !== prevProps.productsCart.length) {
			this.setState({
				...this.state,
				products: Object.values(addOrRemoveproducts(productsCart)),
				contProducts: Object.values(contProduct(productsCart)),
			});
		}
	}

	render() {
		const { setProducts, setProductsContext, setRemoveLS } = this.props;
		const { products, contProducts } = this.state;

		return (
			<ProductsPage 
				products={products}
				contProducts={contProducts}
				saveLocalStorage={setProducts}
				setProductsContext={setProductsContext}
				setRemoveLS={setRemoveLS}
			/>
		)
	}
}

Products.propTypes = {
	productsCart: PropTypes.array, 
	setProducts: PropTypes.func,
	setProductsContext: PropTypes.func,
	setRemoveLS: PropTypes.func,
}

Products.defaultProps = {
	productsCart: [], 
}

export default withProducts(Products);