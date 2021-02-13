import React, { Fragment } from 'react';
import Layout from '../../components/layout';
import { NextPage } from 'next';

const Create: NextPage = () => {
	return (
		<Fragment>
			<Layout isAuth={true}>
				<p>{'Create post'}</p>
			</Layout>
		</Fragment>
	);
};

export default Create;
