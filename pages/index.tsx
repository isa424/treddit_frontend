import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Layout from '../components/layout';
import PostsList from '../components/posts/posts_list';

const Text = () => (
	<p>
		{
			'Donec porttitor congue fermentum. Cras dignissim nisl nunc, eu iaculis arcu bibendum gravida. Suspendisse condimentum purus ullamcorper, ultricies neque id, iaculis lorem. Aliquam cursus bibendum risus ut sagittis. Aenean odio velit, vestibulum eleifend tempor ac, euismod non velit. Sed consequat ligula tortor, nec vehicula augue aliquam nec. Etiam at est massa. Aliquam arcu ante, mollis vitae est vel, ornare malesuada dolor. Ut id porta tortor. Integer rhoncus mauris tortor. Proin condimentum erat justo, a luctus lacus convallis ac. Aliquam ligula orci, porta et erat quis, aliquam condimentum ante. Aliquam diam nisl, egestas vitae risus a, blandit finibus mi.'
		}
	</p>
);

const Home: NextPage = () => {
	const [limit] = useState(10);
	const [skip, setSkip] = useState(0);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then((res) => setPosts(res.slice(skip, limit)))
			.catch((err) => console.error(err));
	}, []);

	return (
		<Layout>
			<PostsList posts={posts} />
		</Layout>
	);
};

export default Home;
