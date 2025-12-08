import { Link } from "react-router-dom";
import styled from '@emotion/styled';

export const Sidebar = styled.div`
  padding: 40px 16px;
  width: 280px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Header = styled.div`
  margin: 0 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Profile = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 9999px;
  background-color: var(--natural-400);
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ProfileTitle = styled.p`
  margin: 0;
`;

export const ProfileSubtitle = styled.p`
  margin: 0;
  color: var(--natural-700);
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const LinkContainer = styled(Link)`
  text-decoration: none;
`;

export const Item = styled.div`
  padding: 12px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--natural-700);
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    color: var(--natural-900);
    background-color: var(--natural-200);
  }
`;

export const ItemContent = styled.p`
  margin: 0;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Connecting = styled.div`
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--natural-300);
  border-radius: 8px;
  background-color: var(--white);
`;

export const ConnectingWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items:center;
  gap: 12px
`;

export const ConnectingContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ConnectingTitle = styled.div`
  margin: 0px;
`;

export const ConnectingSubtitle = styled.div`
  margin: 0px;
  color: var(--natural-700);
`;

export const ConnectingStatus = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 9999px;
  background-color: #25D548;
`;