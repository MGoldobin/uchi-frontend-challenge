import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

interface StyledNavigationLinkProps {
	text: string,
	to: string
}

const StyledNavigationLink = styled(NavLink)`
	color: #fff;
	height: 100%;
	padding: 23px 25px;
	text-decoration: none;
	opacity: .7;
	background-color: #2196F3;

	&.active {
		opacity: 1;
		background-color: #1E88E5;
	}
`

export const NavigationLink: React.FC<StyledNavigationLinkProps> = ({text, to}) => {
	return (
		<StyledNavigationLink to={to}>
			{text}
		</StyledNavigationLink>
	)
}