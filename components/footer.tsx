import React, { FC, Fragment } from 'react';
import styled from 'styled-components';

const StyledFooter = styled('div')`
	@media screen and (max-width: 425px) {
		flex-direction: column;
	}
`;

const StyledList = styled('ul')`
	list-style: none;
`;

const Footer: FC = () => {
	return (
		<Fragment>
			<footer className={'bg-light border-top'}>
				<StyledFooter
					className={'d-flex justify-content-around container mt-4'}
				>
					<StyledList>
						<li>
							<h4>{'About'}</h4>
						</li>
						<li>
							<a href="#">{'About'}</a>
						</li>
						<li>
							<a href="#">{'Blog'}</a>
						</li>
						<li>
							<a href="#">{'Advertising'}</a>
						</li>
						<li>
							<a href="#">{'Careers'}</a>
						</li>
					</StyledList>
					<StyledList>
						<li>
							<h4>{'Help'}</h4>
						</li>
						<li>
							<a href="#">{'Help'}</a>
						</li>
						<li>
							<a href="#">{'Contact Us'}</a>
						</li>
						<li>
							<a href="#">{'Rules'}</a>
						</li>
					</StyledList>
					<StyledList>
						<li>
							<h4>{'Apps & Tools'}</h4>
						</li>
						<li>
							<a href="#">{'iOS'}</a>
						</li>
						<li>
							<a href="#">{'Android'}</a>
						</li>
						<li>
							<a href="#">{'Developers'}</a>
						</li>
					</StyledList>
					<StyledList>
						<li>
							<h4>{'Privacy & Settings'}</h4>
						</li>
						<li>
							<a href="#">{'Privacy'}</a>
						</li>
						<li>
							<a href="#">{'Terms & Conditions'}</a>
						</li>
						<li>
							<a href="#">{'Content Policy'}</a>
						</li>
						<li>
							<a href="#">{'Cookies'}</a>
						</li>
					</StyledList>
					<StyledList>
						<li>
							<h4>{'Social Links'}</h4>
						</li>
						<li>
							<a href="#">{'Facebook'}</a>
						</li>
						<li>
							<a href="#">{'Twitter'}</a>
						</li>
						<li>
							<a href="#">{'Instagram'}</a>
						</li>
					</StyledList>
				</StyledFooter>
				<div
					className={
						'd-flex align-items-center justify-content-center py-3'
					}
				>
					{'Brand © 2021'}
				</div>
			</footer>
		</Fragment>
	);
};

export default Footer;
