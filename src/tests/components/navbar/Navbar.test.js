import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import toJson from 'enzyme-to-json';
import NavbarPage from '../../../components/navbar/NavbarPage';

test('Pruebas en <NavbarPage />', () => {	
	const wrapper = shallow(
		<NavbarPage 
			products={[1,2,3,4]}
		/>
	);
	
	expect(toJson(wrapper)).toMatchSnapshot();
});