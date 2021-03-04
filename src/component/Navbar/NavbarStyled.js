import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  height: 4rem;
  width: 100%;
  display: flex;
  z-index: 1;

  /* Animation */
  transition-timing-function: ease-in;
  transition: all 0.5s;
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const NavLogo = styled.img`
  height: 4rem;
  top: 0;
  object-fit: contain;
  margin-left: 25px;
  cursor: pointer;
`;

export const NavAvatar = styled.img`
  height: 2.5rem;
  top: 0;
  padding-right: 1rem;
  object-fit: contain;
  cursor: pointer;
`;
