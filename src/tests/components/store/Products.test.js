import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import ProductsPage from '../../../components/store/components/ProductsPage';

test('Probando la prop "data" en <ProductsPage />', () => {	
	const wrapper = shallow(
		<ProductsPage 
			data={[{id: 1, img: "imagen1", name: "imagen1.1", price: 2}]}
		/>
	);

	const img = wrapper.find('.card').childAt(0).props().src;
	const name = wrapper.find('.card__text').text();
	const price = wrapper.find('.card-body').childAt(1).text();

	expect(img).toBe('imagen1');
	expect(name).toBe('imagen1.1');
	expect(price).toBe('$ 2');
});