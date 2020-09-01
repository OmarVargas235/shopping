import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import ClearCartPage from '../../../components/cart/components/ClearCartPage';

describe('Pruebas en <ClearCart />', () => {

	let stateCheckoutSuccessful = {
		checkoutSuccessful: false,
	} 

	let stateClearProducts = {
		fullProducts: [1,2,3,4],
	} 

	const clearProducts = () => {
		stateClearProducts = {
			...stateClearProducts,
			fullProducts: [],
		}
	}

	const setCheckoutSuccessful = () => {
		stateCheckoutSuccessful = {
			...stateCheckoutSuccessful,
			checkoutSuccessful: true,
		}
	}

	const wrapper = shallow(
			<ClearCartPage 
				clearProducts={clearProducts}
				setCheckoutSuccessful={setCheckoutSuccessful}
				products={[{price: 1}]}
			/>
		)

	test('Comprobando la funcionalidad del boton "CHECKOUT" en <ClearCartPage />', () => {	
		const buttonCheckout = wrapper.find('button').first();

	    buttonCheckout.simulate('click');
		
		expect(stateCheckoutSuccessful.checkoutSuccessful).toBe(true);
		expect(stateClearProducts.fullProducts.length).toBe(0);
	});

	test('Comprobando la funcionalidad del boton "CLEAR" en <ClearCartPage />', () => {	
		const buttonClear = wrapper.find('button').last();

	    buttonClear.simulate('click');
		
		expect(stateClearProducts.fullProducts.length).toBe(0);
	});

	test('Comprobando el Total Payment de <ClearCartPage /> no sea NaN', () => {
		const totalPayment = wrapper.find('.card-body').childAt(3);
		expect(totalPayment.html()).not.toStrictEqual('<p>$ NaN</p>');
	});

	test('Comprobando el Total Items de <ClearCartPage />', () => {
		const totalPayment = wrapper.find('.card-body').childAt(1);
		expect(typeof Number(totalPayment.text())).toBe('number');
	});
});