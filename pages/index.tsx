import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Layout from '../components/layout';
import PostsList from '../components/posts/posts_list';
import styled from 'styled-components';

const Ad = styled('div')`
	height: 500px;
	background: #eee;
`;

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
			<div className={'row'}>
				<div className={'col-7 offset-1'}>
					<PostsList posts={posts} />
				</div>
				<div className={'col-3'}>
					<Ad />
				</div>
			</div>
		</Layout>
	);
};

export default Home;
