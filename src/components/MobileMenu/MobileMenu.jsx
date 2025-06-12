import React from "react";
import styled from "styled-components";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import {
  Close,
  Content,
  Description,
  DialogOverlay,
  Portal,
  Root,
  Title,
  Trigger,
} from "@radix-ui/react-dialog";
import { COLORS } from "../../constants";

export const MobileMenu = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <Portal>
      <StyledOverlay />
      <StyledContent ref={forwardedRef}>
        <Title asChild>
          <VisuallyHidden>Menu options</VisuallyHidden>
        </Title>
        <Description asChild>
          <VisuallyHidden>
            Navigate through different sections of the shop
          </VisuallyHidden>
        </Description>

        <DialogContentWrapper>

          <StyledClose asChild>
            <UnstyledButton>
              <Icon id={"close"} />
              <VisuallyHidden>Dismiss menu</VisuallyHidden>
            </UnstyledButton>
          </StyledClose>

          <DialogNav>
            <NavLink accent href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </DialogNav>
          <FooterNav>
          <FooterNavLink href="/terms">Terms and Conditions</FooterNavLink>
          <FooterNavLink href="/terms">Privacy Policy</FooterNavLink>            
          <FooterNavLink href="/terms">Contact Us</FooterNavLink>            
          </FooterNav>
        </DialogContentWrapper>
      </StyledContent>
    </Portal>
  )
);

const StyledOverlay = styled(DialogOverlay)`
  background: rgba(0 0 0 / 0.5);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  place-items: center;
  overflow-y: auto;
`;

const StyledClose = styled(Close)`
  align-self:end;
`

const StyledContent = styled(Content)`
  position: absolute;
  top: 0;
  right: 0;
  background: var(--color-white);
`;

const DialogContentWrapper = styled.div`
  min-width:300px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 26px 16px 32px 32px;

`

const DialogNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap:22px;
  font-size: ${18/16}rem
`
const FooterNav = styled.footer`
  display: flex;
  flex-direction: column;
  font-size: ${14/16}rem;
  gap: 14px;
`
const NavLink = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  color: ${({accent}) => accent ? COLORS.secondary : COLORS.gray[900]};
  font-weight: var(--weight-medium);
`;

const FooterNavLink = styled(NavLink)`
  color: var(--color-gray-700);

`

export const MobileMenuDialog = Root;
export const MobileMenuDialogTrigger = Trigger;
