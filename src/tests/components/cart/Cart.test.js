import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import CartPage from '../../../components/cart/CartPage';

describe('Pruebas en <CartPage />', () => {

	let wrapper = shallow(
			<CartPage 
				productsCart={[]}
				checkoutSuccessful={true}
				setCheckoutSuccessful={() => {}}
			/>
		)

	test('Probando que la prop "checkoutSuccessful", sea true', () => {	
		const container = wrapper.find('.container').text().trim();
		const templete = 'Your cart is empty<CheckoutSuccessful />';
		
		expect(container).toMatch(templete);
	});

	test('Probando que la prop "checkoutSuccessful", sea false', () => {
		wrapper = shallow(
			<CartPage 
				checkoutSuccessful={false}
			/>
		)	
		const container = wrapper.find('.container').text().trim();
		const templete = 'Your cart is empty';
		
		expect(container).toMatch(templete);
	});

	test('Probando que la prop "productsCart", no este vacia', () => {
		wrapper = shallow( <CartPage productsCart={[1]} /> );	
		const row = wrapper.find('.row').text().trim();
		const templete = '<withProducts(Products) /><withProducts(ClearCart) />';
		
		expect(row).toMatch(templete);
	});
});