import React from 'react';
import PropTypes from 'prop-types';
import SearchProductPage from './components/SearchProductPage';
import ProductsPage from './components/ProductsPage';

const StorePage = ({ data, upDateSearch }) => (
	<div className="container">
		<h2 className="text-center">Store</h2>
		<p className="text-center">This is the Store Page.</p>

		<div className="container">
			<SearchProductPage 
				data={data}
				upDateSearch={upDateSearch}
			/>
			
			<ProductsPage 
				data={data}
			/>
		</div>
	</div>
)

StorePage.propTypes = {
	data: PropTypes.array, 
	upDateSearch: PropTypes.func
}

StorePage.defaultProps = {
	data: [], 
}

export default React.memo(StorePage);