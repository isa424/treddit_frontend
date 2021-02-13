import React, { FC, Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import ProfileDropdown from './dropdown';
import { useSession } from 'next-auth/client';

const StyledNav = styled('nav')`
	border-radius: 0;
	background: #ffffff;
	box-shadow: 0 2px 3px #b3b3b3, 0px -3px 3px #ffffff;
`;

const Input = styled('input')`
	box-shadow: inset 0 3px 3px 0 #eee;

	@media screen and (min-width: 992px) {
		height: 40px;
		width: 500px !important;
		margin-left: 20px;
	}

	@media screen and (max-width: 991px) {
	}
`;

const AddPost = styled('a')`
	height: 40px;
`;

const TallLink = styled('a')`
	height: 40px;
`;

const Header: FC = () => {
	const [session, loading] = useSession();

	return (
		<Fragment>
			<StyledNav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
				<div className={'container'}>
					<Link href={'/'} passHref={true}>
						<a className="navbar-brand">{'Brand'}</a>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>

					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav mr-auto">
							<li>
								<div className="input-group">
									<Input
										type="text"
										placeholder={'Search...'}
										className={'form-control'}
									/>
									<div className="input-group-append">
										<span
											className="input-group-text"
											id="basic-addon2"
										>
											<Image
												src={'/search-solid.svg'}
												height={18}
												width={18}
											/>
										</span>
									</div>
								</div>
							</li>
						</ul>
						{!session ? (
							<Fragment>
								<Link href={'/login'} passHref={true}>
									<TallLink
										className={
											'btn-outline-primary btn shadow-sm d-flex align-items-center'
										}
									>
										<FontAwesomeIcon
											fixedWidth={true}
											icon={faSignInAlt}
										/>
										<span className={'ml-2'}>
											{'Login'}
										</span>
									</TallLink>
								</Link>
								{/*<Link href={'/signup'} passHref={true}>*/}
								{/*	<TallLink className={'btn-outline-primary btn ml-2'}>{'Sign Up'}</TallLink>*/}
								{/*</Link>*/}
							</Fragment>
						) : (
							<Fragment>
								<Link href={'/posts/create'} passHref={true}>
									<TallLink
										className={
											'btn btn-outline-success d-flex align-items-center shadow-sm ml-2'
										}
									>
										<Fragment>
											<FontAwesomeIcon
												fixedWidth={true}
												icon={faPlus}
											/>
											<i className="fas fa-plus" />
											<span className={'ml-2'}>
												{'New Post'}
											</span>
										</Fragment>
									</TallLink>
								</Link>
								<ProfileDropdown />
							</Fragment>
						)}
					</div>
				</div>
			</StyledNav>
		</Fragment>
	);
};

export default Header;
