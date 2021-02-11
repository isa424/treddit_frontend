import React, { FC, Fragment, } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser, faCog, faSignOutAlt, } from '@fortawesome/free-solid-svg-icons';

const StyledNav = styled('nav')`
	border-radius: 0;
	background: #ffffff;
	box-shadow: 0px 2px 3px #b3b3b3, 0px -3px 3px #ffffff;
`;

const Input = styled('input')`
	box-shadow: inset 0px 3px 3px 0 #eee;

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

const Dropdown = styled('div')`
	@media screen and (max-width: 991px) {
		display: none;
	}
`;

const Button = styled('button')`
	::after {
		display: none;
	}
`;

const Profile = styled('div')`
	height: 40px;
`;

const RoundedImage = styled(Image)`
	border-radius: 5px;
`;

const Header: FC = () => {
	const handleLogout = (event: React.MouseEvent<Element, MouseEvent>) => {
		console.log(event);
	}

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
					<span className="navbar-toggler-icon"/>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li>
							<div className="input-group">
								<Input type="text" placeholder={'Search...'} className={'form-control'}/>
								<div className="input-group-append">
									<span className="input-group-text" id="basic-addon2">
										<Image src={'/search-solid.svg'} height={18} width={18}/>
									</span>
								</div>
							</div>
						</li>
					</ul>
					<Link href={'/create-post'} passHref={true}>
						<AddPost className={'btn btn-outline-success d-flex align-items-center'}>
							<Fragment>
								<FontAwesomeIcon fixedWidth={true} icon={faPlus}/>
								<i className="fas fa-plus"/>
								<span className={'ml-2'}>{'New Post'}</span>
							</Fragment>
						</AddPost>
					</Link>
					<Dropdown className="dropdown">
						<Button
							className="btn btn-light dropdown-toggle p-0 ml-3"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							<div className={'d-flex align-items-center'}>
								<Profile>
									<RoundedImage src={'/profile.png'} height={40} width={40}/>
								</Profile>
								<span className={'ml-2'}>{'Username'}</span>
							</div>
						</Button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<Link href={'/profile'} passHref={true}>
								<a className="align-items-center d-flex dropdown-item px-2">
									<FontAwesomeIcon fixedWidth={true} icon={faUser}/>
									<span className={'ml-2'}>{'Profile'}</span>
								</a>
							</Link>
							<Link href={'/settings'} passHref={true}>
								<a className="align-items-center d-flex dropdown-item px-2">
									<FontAwesomeIcon fixedWidth={true} icon={faCog}/>
									<span className={'ml-2'}>{'Settings'}</span>
								</a>
							</Link>
							<div className="dropdown-divider"/>
							<button className="btn btn-link align-items-center d-flex dropdown-item px-2" onClick={handleLogout}>
								<FontAwesomeIcon fixedWidth={true} icon={faSignOutAlt}/>
								<span className={'ml-2'}>{'Logout'}</span>
							</button>
						</div>
					</Dropdown>
				</div>
				</div>
			</StyledNav>
		</Fragment>
	);
}

export default Header;
