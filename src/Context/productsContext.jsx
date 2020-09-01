import React from 'react';

export const ProductsContext = React.createContext();

class ProductsProvider extends React.Component {

	state = {
		products: JSON.parse(localStorage.getItem('products')) 
					? JSON.parse(localStorage.getItem('products')) : [],
	}

	setProducts = (product, minus="mas", clear="") => {
		const { products } = this.state;
		let productsCopy = [...products];

		if (clear === 'clear') {
			this.setState({
				...this.state,
				products: [],
			});

			return;
		}
		
		if (minus === 'minus') {
			const indexRemove = productsCopy.findIndex(el => el.id === product.id);
			productsCopy.splice(indexRemove, 1);
		
		} else productsCopy.push(product);

		this.setState({
			...this.state,
			products: productsCopy,
		});
	}

	render() {
		const { products } = this.state;

		return (
			<ProductsContext.Provider value={{
				products,
				setProductsContext: this.setProducts
			}}>
				{ this.props.children }
			</ProductsContext.Provider>
		)
	}
}

export default ProductsProvider;