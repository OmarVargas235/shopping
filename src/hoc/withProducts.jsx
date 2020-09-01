import React from 'react';
import { ProductsContext } from '../Context/productsContext';

const withProducts = Component => {
	const hoc = class extends React.Component {

		state = {
			arrProducts: JSON.parse(localStorage.getItem('products')) 
						 ? JSON.parse(localStorage.getItem('products')) : [],
		}

		saveLocalStorage = product => {
			const getLS = JSON.parse(localStorage.getItem('products'));

			if (!getLS) {
				localStorage.setItem('products', JSON.stringify([product]));

				this.setState({
					...this.state,
					arrProducts: [product] 
				});
			
			} else {
				getLS.push(product);
				localStorage.setItem('products', JSON.stringify(getLS));
				this.setState({
					...this.state,
					arrProducts: getLS 
				});
			}
		}

		removeLocalStorage = (product, clear="") => {
			const getLS = JSON.parse(localStorage.getItem('products'));

			if (clear === 'clear') {
				localStorage.setItem('products', JSON.stringify([]));

				this.setState({
					...this.state,
					arrProducts: [] 
				});

				return;
			}

			if (getLS) {
				const indexRemove = getLS.findIndex(el => el.id === product.id);
				getLS.splice(indexRemove, 1);
				
				localStorage.setItem('products', JSON.stringify(getLS));

				this.setState({
					...this.state,
					arrProducts: getLS 
				});	
			}
		}
		
		render() {
			const { arrProducts } = this.state;
			
			return (
				<ProductsContext.Consumer>
					{value => {
						const { setProductsContext } = value;

						return (
							<Component
								{...this.props}
								products={arrProducts}
								setProducts={this.saveLocalStorage}
								setProductsContext={setProductsContext}
								setRemoveLS={this.removeLocalStorage}
							/>
						)
					}}
				</ProductsContext.Consumer>
			)
		}
	}
	
	hoc.displayName = `withProducts(${Component.displayName || Component.name})`;

	return hoc;
}

export default withProducts;