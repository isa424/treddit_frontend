import React from 'react';
import ProfileDropdown from './dropdown';
import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import { shallow } from 'enzyme';
import { Provider } from 'next-auth/client';

describe('Dropdown', () => {
	it('should match the snapshot', () => {
		const session = {
			accessToken:
				'3fb32488c440d3c29f7e6d719543786e58ae62083ccf722b5877b5371f9f1a24',
			expires: '2021-03-15T10:53:26.679Z',
			user: {
				image: 'https://avatars.githubusercontent.com/u/5929340?v=4',
			},
		};
		const tree = renderer
			.create(
				<Provider session={session}>
					<ProfileDropdown />
				</Provider>
			)
			.toJSON();

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
