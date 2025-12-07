import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 12px; 12px 12px 0;
  padding: 28px;
  width: 100%;
  height: calc(100vh - 24px);
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid var(--natural-300);
  border-radius: 12px;
  background-color: var(--white);
  box-sizing: border-box;
`;

export const Header = styled.div`
  margin: 0 12px;
  display: flex;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 22px;
  font-weight: 400;
`;