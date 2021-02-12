import React, { FC, Fragment } from 'react';
import Head from 'next/head';
import Footer from './footer';
import Header from './header';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledMain = styled('main')`
	margin-top: 100px;
	margin-bottom: 100px;
`;

const Layout: FC = ({ children }) => {
	return (
		<Fragment>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href={'/favicon.ico'} />
			</Head>

			<Header />

			<StyledMain className={'container'}>{children}</StyledMain>

			<Footer />
		</Fragment>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
