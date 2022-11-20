import React from 'react'
import styled from 'styled-components'
import { NavigationLink } from '../index'

const StyledHeader = styled.header`
	background-color: #2196F3;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.24);
	width: 100%;
	height: 64px;
	padding: 0 64px;
`

const NavigationMenu = styled.nav`
	height: 100%;
	display: flex;
`

export const Header: React.FC = () => {
	return (
		<StyledHeader>
			<NavigationMenu>
				<NavigationLink 
					to='/'
					text='Все котики'
				/>
				<NavigationLink 
					to='/liked'
					text='Любимые котики'
				/>
			</NavigationMenu>
		</StyledHeader>
	)
}