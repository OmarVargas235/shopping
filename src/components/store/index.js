import React from 'react';
import StorePage from './StorePage';
import { arrData } from '../../utils/data'; 

class Store extends React.Component {

	state = {
		search: '',
		dataFilter: []
	}

	componentDidUpdate() {
		const { search, dataFilter } = this.state;

		const searchFilter = arrData.filter(el => (
			el.name.toLowerCase().indexOf(search.toLowerCase()) === 0 && el
		));

		if (dataFilter.length !== searchFilter.length) {
			this.setState({
				...this.state,
				dataFilter: searchFilter,
			});
		}
	}

	upDateSearch = search => {
		this.setState({
			...this.state,
			search
		});
	}

	render() {	
		const { dataFilter } = this.state;

		return (
			<StorePage 
				data={dataFilter.length === 0 ? arrData : dataFilter}
				upDateSearch={this.upDateSearch}
			/>
		)
	}
}

export default Store;