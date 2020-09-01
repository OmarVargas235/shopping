import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchStyles = styled.div`
	.form-control {
		background-color: #f7f7f9;
	    border: 4px solid #f7f7f9;
	    outline: none;
	    -webkit-transition: border-color .2s ease-in;
	    transition: border-color .2s ease-in;

	    &:focus {
	    	border-color: #c6c6c6;
	    	box-shadow: none;
	    }
	}
`;

const SearchProductPage = ({ data, upDateSearch }) => (
	<SearchStyles className="d-flex justify-content-between">
		<p className="mb-0">{data.length} product</p>
		
		<div className="form-group">
			<input 
				type="text" 
				placeholder="Search product" 
				className="px-4 form-control"
				onChange={ e => upDateSearch(e.target.value) } 
			/>
		</div>
	</SearchStyles>
)

SearchProductPage.propTypes = {
	data: PropTypes.array, 
	upDateSearch: PropTypes.func
}

SearchProductPage.defaultProps = {
	data: [], 
}

export default SearchProductPage;