import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import toJson from 'enzyme-to-json';
import CheckoutSuccessful from '../../../components/cart/components/CheckoutSuccessful';

test('Comprobando el marcado html en <CheckoutSuccessful />', () => {	
	const wrapper = shallow( <CheckoutSuccessful /> );

    expect(toJson(wrapper)).toMatchSnapshot();
});