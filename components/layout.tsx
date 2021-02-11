import React, { FC, Fragment, } from 'react';
import Head from 'next/head';
import Footer from './footer';
import Header from './header';
import styled from 'styled-components';

const StyledMain = styled('main')`
	margin-top: 100px;
	margin-bottom: 100px;
`;

const Layout: FC = ({children, }) => {
	return (
		<Fragment>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href={'/favicon.ico'}/>
			</Head>
			<Header/>

			<StyledMain className={'container'}>{children}</StyledMain>

			<Footer/>
		</Fragment>
	);
}

export default Layout;
