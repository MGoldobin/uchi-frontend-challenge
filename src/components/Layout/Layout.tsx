import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import { Header } from '../index'

const StyledLayout = styled.div`
  width: 100%;
	height: 100vh;
	min-height: 100vh;
`

export const Layout = () => (
  <StyledLayout>
    <Header />
    <Outlet />
  </StyledLayout>
)