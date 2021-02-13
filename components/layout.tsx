import React, { FC, Fragment } from 'react';
import Head from 'next/head';
import Footer from './footer/footer';
import Header from './header/header';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';

const StyledMain = styled('main')`
	margin-top: 100px;
	margin-bottom: 100px;
`;

interface IProps {
	children: React.ReactNode;
	isAuth?: boolean; // Auth protected
	notAuth?: boolean; // Login, signup, etc.
}

const Layout: FC<IProps> = ({ children, isAuth, notAuth }) => {
	const router = useRouter();
	const [session, loading] = useSession();

	if (isAuth && !session && !loading) {
		router.push('/login').catch((err) => console.error(err));
	} else if (notAuth && session && !loading) {
		router.push('/').catch((err) => console.error(err));
	}

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
	isAuth: PropTypes.bool,
	notAuth: PropTypes.bool,
	children: PropTypes.node.isRequired,
};

export default Layout;
