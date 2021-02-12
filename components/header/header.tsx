import React, { FC, Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPlus,
	faUser,
	faCog,
	faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import ProfileDropdown from './dropdown';

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

const Header: FC = () => {
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
						<Link href={'/create-post'} passHref={true}>
							<AddPost
								className={
									'btn btn-outline-success d-flex align-items-center'
								}
							>
								<Fragment>
									<FontAwesomeIcon
										fixedWidth={true}
										icon={faPlus}
									/>
									<i className="fas fa-plus" />
									<span className={'ml-2'}>{'New Post'}</span>
								</Fragment>
							</AddPost>
						</Link>
						<ProfileDropdown />
					</div>
				</div>
			</StyledNav>
		</Fragment>
	);
};

export default Header;
