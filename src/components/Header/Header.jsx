import React from 'react';
import styled from 'styled-components';

import { COLORS, WEIGHTS, BREAKPOINTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>

        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <TabletAndMobileNav>
        <UnstyledButton>
        <Icon id="shopping-bag" strokeWidth={2} />
        <VisuallyHidden>Shopping bag</VisuallyHidden>
      </UnstyledButton>
        <UnstyledButton>
        <Icon id="search" strokeWidth={2} />
        <VisuallyHidden>Search</VisuallyHidden>
      </UnstyledButton>
        <UnstyledButton>
        <Icon id="menu" strokeWidth={2} />
        <VisuallyHidden>Menu</VisuallyHidden>
      </UnstyledButton>
        </TabletAndMobileNav>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  @media(max-width: ${BREAKPOINTS.tablet}rem){
    border-top: 4px solid ${COLORS.gray[900] }; 
  }
  @media(max-width: ${BREAKPOINTS.phone}rem){
    padding: 22px 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;
  @media(max-width: ${BREAKPOINTS.tablet}rem){
    display:none;
  }
`;

const TabletAndMobileNav = styled.nav`
display: none;
@media(max-width: ${BREAKPOINTS.tablet}rem){
    display: flex;
    justify-content:center;
    gap: 34px;
  }
`

const Side = styled.div`
  flex: 1;
`;

const Filler = styled.div`
flex: 1;
@media(max-width: ${BREAKPOINTS.tablet}rem){
    display:none;
  }
`
const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
