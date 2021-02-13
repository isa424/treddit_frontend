import React, { FC, Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';

const ImageContainer = styled('div')`
	position: relative;
	height: 300px;
`;

interface IProps {
	className?: string;
	post: Record<string, string>;
}

const Post: FC<IProps> = ({ post, className }) => {
	const [liked, setLiked] = useState(false);
	const [likeCount, setLikeCount] = useState(Math.round(Math.random() * 100));
	const tags = [
		{ color: 'badge-warning', text: 'javascript' },
		{ color: 'badge-success', text: 'html' },
		{ color: 'badge-primary', text: 'css' },
	];

	const handleLike = () => {
		setLiked(!liked);

		if (liked) {
			setLikeCount(likeCount - 1);
		} else {
			setLikeCount(likeCount + 1);
		}
	};

	return (
		<div className={clsx('card shadow-sm', className)}>
			<div className={'my-2 mx-3 d-flex align-items-center'}>
				<Image
					src={'/profile.png'}
					alt={'profile image'}
					height={30}
					width={30}
					className={'rounded'}
				/>
				<strong className={'mr-2 ml-2'}>
					<Link href={'/users/1'}>{'Author'}</Link>
				</strong>
				<span className={'text-muted mr-4'}>{'24 Feb. 2021'}</span>
			</div>
			<ImageContainer>
				<Image
					src={'/bg.jpg'}
					alt={'post-banner'}
					layout={'fill'}
					objectFit={'cover'}
				/>
			</ImageContainer>
			<div className="card-body">
				<h5 className="card-title">
					<Link href={`/posts/${post.id}`}>{post.title}</Link>
				</h5>
				<div className={'mb-2 d-flex align-items-center'}>
					{tags.map((t, i) => (
						<span
							key={i}
							className={`badge mr-2 px-2 py-1 ${t.color}`}
						>
							{t.text}
						</span>
					))}
				</div>
				<p className={'card-text'}>
					{post.body} {post.body} {post.body}
				</p>
			</div>

			<div className="d-flex align-items-center flex-wrap px-3 pb-3">
				<button
					className={clsx('btn shadow-sm mr-3', {
						'btn-outline-danger': !liked,
						'btn-danger': liked,
					})}
					onClick={handleLike}
				>
					<span
						className={clsx('badge badge-pill mr-2', {
							'badge-danger': !liked,
							'badge-light': liked,
						})}
					>
						{likeCount}
					</span>
					<FontAwesomeIcon icon={faHeart} />
					<span className={'ml-2 d-none d-sm-inline'}>
						{liked ? 'Liked' : 'Like'}
					</span>
				</button>

				<button className={'btn btn-light shadow-sm'}>
					<span className={clsx('badge badge-pill badge-dark mr-2')}>
						{likeCount}
					</span>
					<FontAwesomeIcon icon={faComment} />
					<span className={'ml-2 d-none d-sm-inline'}>
						{'Comments'}
					</span>
				</button>
			</div>
		</div>
	);
};

Post.propTypes = {
	className: PropTypes.string,
	post: PropTypes.any.isRequired,
};

export default Post;
