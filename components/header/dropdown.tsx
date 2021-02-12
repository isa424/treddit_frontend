import { faCog, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC, Fragment, useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

const Dropdown = styled('div')`
	@media screen and (max-width: 991px) {
		display: none;
	}
`;

const Profile = styled('div')`
	height: 40px;
`;

const RoundedImage = styled(Image)`
	border-radius: 5px;
`;

const Button = styled('button')`
	::after {
		display: none;
	}
`;

const ProfileDropdown: FC = () => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(!open);
	};

	const handleLogout = (event: React.MouseEvent<Element, MouseEvent>) => {
		console.log(event);
	};

	return (
		<Fragment>
			<Dropdown className="dropdown">
				<Button
					className="btn btn-light dropdown-toggle p-0 ml-3"
					type="button"
					id="dropdown"
					onClick={handleOpen}
				>
					<div className={'d-flex align-items-center'}>
						<Profile>
							<RoundedImage
								src={'/profile.png'}
								height={40}
								width={40}
							/>
						</Profile>
						<span className={'ml-2'}>{'Username'}</span>
					</div>
				</Button>
				<div
					className={clsx({ show: open, 'dropdown-menu': true })}
					id={'dropdown-menu'}
				>
					<Link href={'/profile'} passHref={true}>
						<a className="align-items-center d-flex dropdown-item px-2">
							<FontAwesomeIcon fixedWidth={true} icon={faUser} />
							<span className={'ml-2'}>{'Profile'}</span>
						</a>
					</Link>
					<Link href={'/settings'} passHref={true}>
						<a className="align-items-center d-flex dropdown-item px-2">
							<FontAwesomeIcon fixedWidth={true} icon={faCog} />
							<span className={'ml-2'}>{'Settings'}</span>
						</a>
					</Link>
					<div className="dropdown-divider" />
					<button
						className="btn btn-link align-items-center d-flex dropdown-item px-2"
						onClick={handleLogout}
					>
						<FontAwesomeIcon
							fixedWidth={true}
							icon={faSignOutAlt}
						/>
						<span className={'ml-2'}>{'Logout'}</span>
					</button>
				</div>
			</Dropdown>
		</Fragment>
	);
};

export default ProfileDropdown;
