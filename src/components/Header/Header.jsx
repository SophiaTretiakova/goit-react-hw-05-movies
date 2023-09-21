import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    /* color: violet; */
    /* text-transform: uppercase; */
  }
`;

export const Header = () => {
  return (
    <div style={{ display: 'flex', gap: '30px', padding: '20px 0px' }}>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/movies">Search movies</StyledLink>
    </div>
  );
};
