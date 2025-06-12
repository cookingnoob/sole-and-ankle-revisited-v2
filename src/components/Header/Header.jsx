import React from "react";
import styled from "styled-components";

import { COLORS, WEIGHTS, BREAKPOINTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";

import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";
import {
  MobileMenuDialog,
  MobileMenu,
  MobileMenuDialogTrigger,
} from "../MobileMenu/MobileMenu";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

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

          <MobileMenuDialog
            open={showMobileMenu}
            onOpenChange={setShowMobileMenu}>
              
              <MobileMenuDialogTrigger asChild>
              <UnstyledButton >
                <Icon id="menu" strokeWidth={2} />
                <VisuallyHidden>Menu</VisuallyHidden>
              </UnstyledButton>
            </MobileMenuDialogTrigger>
            <MobileMenu />
          </MobileMenuDialog>
        </TabletAndMobileNav>
        <Filler />
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);

  @media (max-width: ${BREAKPOINTS.tablet}rem) {
    border-top: 4px solid var(--color-gray-900);
  }
  
  @media (max-width: ${BREAKPOINTS.phone}rem) {
    padding: 22px 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap:clamp(
    1rem,
    10.2vw - 5.25rem,
    3rem
  );
  margin: 0px 48px;
  @media (max-width: ${BREAKPOINTS.tablet}rem) {
    display: none;
  }
`;

const TabletAndMobileNav = styled.nav`
  display: none;
  @media (max-width: ${BREAKPOINTS.tablet}rem) {
    display: flex;
    justify-content: center;
    gap: 34px;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const Filler = styled.div`
  flex: 1;
  @media (max-width: ${BREAKPOINTS.tablet}rem) {
    display: none;
  }
`;
const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color:  var(--color-secondary);
  }
`;

export default Header;
