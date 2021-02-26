import React, { FC, Fragment } from 'react';
import PropTypes from 'prop-types';
import Post from './post';
import styled from 'styled-components';

const StyledPost = styled(Post)`
	margin: ${({ i }) => (i === 0 ? '0' : '20px')} 0;
`;

interface IProps {
	posts: Record<string, string>[];
}

const PostsList: FC<IProps> = ({ posts }) => {
	return (
		<Fragment>
			{posts.map((p, i) => (
				<StyledPost key={i} i={i} post={p} />
			))}

			{/* Pagination */}
		</Fragment>
	);
};

PostsList.propTypes = {
	posts: PropTypes.array.isRequired,
};

export default PostsList;
