import styled from '@emotion/styled';

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #363f4f51;
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  border-radius: 8px;
  background-color: var(--white);
`;

export const Header = styled.div`
  
`;