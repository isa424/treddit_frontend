import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import { shallow } from 'enzyme';
import Footer from './footer';

describe('Footer component', () => {
	it('should match the snapshot', () => {
		const tree = renderer.create(<Footer />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render', () => {
		const component = shallow(<Footer />);
		const el = component.find('#brand').first();

		expect(el).toBeTruthy();
		expect(el.text()).toEqual('Brand © 2021');
	});

	afterEach(cleanup);
});
