import React from 'react';
import Header from './header';
import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import { Provider } from 'next-auth/client';

describe('Header component', () => {
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
					<Header />
				</Provider>
			)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	afterEach(cleanup);
});
