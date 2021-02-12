import React from 'react';
import Header from './header';
import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';

describe('Header component', () => {
	it('should match the snapshot', () => {
		const tree = renderer.create(<Header />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	afterEach(cleanup);
});
