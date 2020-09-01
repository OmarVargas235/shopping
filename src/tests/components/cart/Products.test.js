import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import ProductsPage from '../../../components/cart/components/ProductsPage';

describe('Pruebas en <Products />', () => {

	const products = [{img: 'img1', id: 1, name: 'title', price: 15}];
	let contProducts = [{cont: 1}];

	const setAddProducts = () => {
		const copyArr = [...contProducts]
		const object = {cont: copyArr[0].cont + 1}
		copyArr[0] = object;
		contProducts = copyArr;
	}

	const setRemoveProducts = () => {
		if (contProducts[0].cont > 1) {
			const copyArr = [...contProducts]
			const object = {cont: copyArr[0].cont - 1}
			copyArr[0] = object;
			contProducts = copyArr;	

		} else contProducts = [{cont: 0}]
	}

	const wrapper = shallow(
			<ProductsPage
				products={products}
				contProducts={contProducts}
				saveLocalStorage={setAddProducts}
				setProductsContext={() => {}}
				setRemoveLS={setRemoveProducts} 
			/>
	)

	test('Comprobando la prop "products" en <ProductsPage />', () => {	
		const id = wrapper.find('.row');
		const img = wrapper.find('.img-fluid');
		const name = wrapper.find('.products__title');
		const price = wrapper.find('.products__price').last().childAt(1);

	   	expect(typeof Number(id.key())).toBe('number');		
	   	expect(img.props().src).toBe('img1');		
	   	expect(img.props().src).toBe('img1');		
	   	expect(name.text()).toBe('title');		
	   	expect(price.text()).toBe('$ 15');		
	});

	test('Comprobando prop "contProducts" en <ProductsPage />', () => {	
		const contProducts = wrapper.find('.row').childAt(2);
		
	   	expect(contProducts.text()).toBe('Qty: 1');		
	});

	test('Comprobando la funcionalidad de los botones "+" y "-" en <ProductsPage />', () => {	
		const btnPlus = wrapper.find('.row').childAt(3).childAt(0);
		const btnMinus = wrapper.find('.row').childAt(3).childAt(1);
		let cont = contProducts[0].cont;

		btnPlus.simulate('click');
	   	expect(contProducts[0].cont).toBeGreaterThan(cont);		
	   	cont = contProducts[0].cont;

		btnMinus.simulate('click');
		expect(contProducts[0].cont).toBeLessThan(cont);	
	});
});