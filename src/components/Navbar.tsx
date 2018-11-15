import React from 'react'
import styled from 'styled-components'
import theme from '../res/theme'

const NavbarContainer = styled.div`
  width: 100vw;
  height: 54px;

  background-color: ${theme.palette.primary};
`

export const Navbar = () => (
  <NavbarContainer>
    Limen
  </NavbarContainer>
)
