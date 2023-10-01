import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { StyledHeader } from './Header.styled';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    /* color: violet; */
    /* text-transform: uppercase; */
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/movies">Search movies</StyledLink>
    </StyledHeader>
  );
};
