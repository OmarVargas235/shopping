import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AboutPage from '../../../components/about/AboutPage.jsx';

test('Comprobando el marcado html', () => {
	const wrapper = shallow(<AboutPage />);

	expect(toJson(wrapper)).toMatchSnapshot();
});