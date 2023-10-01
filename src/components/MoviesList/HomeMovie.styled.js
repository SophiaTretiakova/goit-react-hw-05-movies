import { styled } from 'styled-components';

export const StyledMovieLi = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Overlay = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background: linear-gradient(
    0deg,
    rgba(29, 29, 29, 1) 0%,
    rgba(255, 0, 96, 0.017) 20%
  );
`;

export const StyledMovieImg = styled.img`
  /* position: absolute; */
  display: block;
  width: 200px;
  max-width: 100%;
  height: auto;

  border-radius: 5px;
`;
