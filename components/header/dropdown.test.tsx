import React from 'react';
import ProfileDropdown from './dropdown';
import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import { shallow } from 'enzyme';

describe('Dropdown', () => {
	it('should match the snapshot', () => {
		const tree = renderer.create(<ProfileDropdown />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should show dropdown on profile click', () => {
		const component = shallow(<ProfileDropdown />);

		const button = component.find('#dropdown').first();
		expect(button).toBeTruthy();

		button.prop('onClick')();

		const dropdown = component.find('#dropdown-menu').first();
		expect(dropdown).toBeTruthy();
		expect(dropdown.hasClass('show')).toBeTruthy();
	});

	afterEach(cleanup);
});
