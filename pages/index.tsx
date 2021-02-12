import React from 'react';
import { NextPage } from 'next';
import Layout from '../components/layout';

const Text = () => (
	<p>
		{
			'Donec porttitor congue fermentum. Cras dignissim nisl nunc, eu iaculis arcu bibendum gravida. Suspendisse condimentum purus ullamcorper, ultricies neque id, iaculis lorem. Aliquam cursus bibendum risus ut sagittis. Aenean odio velit, vestibulum eleifend tempor ac, euismod non velit. Sed consequat ligula tortor, nec vehicula augue aliquam nec. Etiam at est massa. Aliquam arcu ante, mollis vitae est vel, ornare malesuada dolor. Ut id porta tortor. Integer rhoncus mauris tortor. Proin condimentum erat justo, a luctus lacus convallis ac. Aliquam ligula orci, porta et erat quis, aliquam condimentum ante. Aliquam diam nisl, egestas vitae risus a, blandit finibus mi.'
		}
	</p>
);

const Home: NextPage = () => {
	return (
		<Layout>
			{[1, 2, 3, 4, 5, 6].map((_, i) => (
				<Text key={i} />
			))}
		</Layout>
	);
};

export default Home;
