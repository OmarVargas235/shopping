import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import SearchProductPage from '../../../components/store/components/SearchProductPage';

describe('Pruebas en <Store />', () => {

	let state = {
		search: '',
	}

	const upDateSearch = search => {
		state = {
			search
		};
	}

	const wrapper = shallow(
			<SearchProductPage 
				data={[]}
				upDateSearch={upDateSearch}
			/>
		)

	test('Probando la prop "data" en <SearchProductPage />', () => {	
		const contProducts = wrapper.find('.d-flex').childAt(0).text();
		
		expect(contProducts).toBe('0 product');
	});

	test('Probando la funcionalidad de la prop "upDateSearch" <SearchProductPage />', () => {	
		const input = wrapper.find('.form-control');

		input.simulate('change', { target: { 
			value: 'busqueda'
		}});
		
		expect(state.search).toBe('busqueda');
	});
});