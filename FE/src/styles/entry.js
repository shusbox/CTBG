import styled from '@emotion/styled';

export const Entry = styled.div`
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
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 22px;
  font-weight: 400;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const HeaderTimeStamp = styled.p`
  margin: 0;
  color: var(--natural-700);
  cursor: default;
`;

export const HeaderReset = styled.button`
  padding: 12px;
  color: var(--white);
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: var(--primary-500);
  cursor: pointer;

  &:hover {
    background-color: var(--primary-600);
  }
`;

export const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
`;

export const Sort = styled.div`
  display: flex;
`;

export const SortItem = styled.button`
  padding: 16px 20px;
  color: var(--primary-500);
  font-size: 16px;
  border: none;
  border-bottom: 2px solid var(--primary-500);
  background-color: var(--white);
  cursor: pointer;
`;

export const Filter = styled.div`
  padding: 12px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 13px;
  flex-wrap: wrap;
  border-top: 1px solid var(--natural-300);
  border-bottom: 1px solid var(--natural-300);
  background-color: var(--natural-100);
`;

export const SwitchContainer = styled.div`
  padding: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 8px;
  background-color: #F5F6F7;
`;

export const SwitchItem = styled.button`
  padding: 12px;
  color: var(--natural-700);
  font-size: 14px;
  font-weight: 500;
  border: none;
  background-color: #F5F6F7;
  cursor: pointer;
`;

export const SwitchSelectItem = styled.button`
  padding: 12px;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 0 4px #363f4f45;
  border: none;
  border-radius: 6px;
  background-color: #FFFFFF;
  cursor: pointer;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const InputPreIcon = styled.div`
  color: var(--natural-700);
  position: absolute;
  top: 13px;
  left: 12px;
  z-index: 5;
`;

export const InputPre = styled.input`
  padding: 12px;
  padding-left: 36px;
  font-size: 15px;
  border: 1px solid var(--natural-300);
  border-radius: 4px;

  &::placeholder {
    color: var(--natural-700);
    font-size: 15px;
    font-weight: 300;
    font-family: 'Pretendard';
  }

  &::focus {
    border-color: var(--primary-500);
  }
`;

export const InputPostIcon = styled.div`
  color: var(--natural-700);
  position: absolute;
  top: 13px;
  right: 12px;
  z-index: 5;
`;

export const InputPost = styled.input`
  padding: 12px;
  padding-right: 36px;
  font-size: 15px;
  border: 1px solid var(--natural-300);
  border-radius: 4px;

  &::placeholder {
    color: var(--natural-700);
    font-size: 15px;
    font-weight: 300;
    font-family: 'Pretendard';
  }

  &::focus {
    border-color: var(--primary-500);
  }
`;

export const Table = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Row = styled.div`
  width: 100%;
  min-height: 44px;
  display: flex;
  align-items: center;
  color: var(--natural-700);
  border-bottom: 1px solid var(--natural-300);
`;

export const ColumnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1px;
  background-color: var(--natural-300);
  overflow: scroll;
`;

export const Column = styled.div`
  width: 100%;
  min-height: 44px;
  display: flex;
  align-items: center;
  color: var(--natural-900);
  background-color: var(--white)
`;

export const CheckboxContainer = styled.div`
  width: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Checkbox = styled.input`
  color: var(--primary-400);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Id = styled.p`
  margin: 0;
  padding-left: 16px;
  min-width: 68px;
  color: inherit;
  font-weight: 300;
`;

export const Grade = styled.p`
  margin: 0;
  padding-left: 16px;
  min-width: 72px;
  color: inherit;
  font-weight: 300;
`;

export const Class = styled.p`
  margin: 0;
  padding-left: 16px;
  min-width: 60px;
  color: inherit;
  font-weight: 300;
`;

export const Name = styled.p`
  margin: 0;
  padding-left: 16px;
  min-width: 100px;
  color: inherit;
  font-weight: 300;
`;

export const Value = styled.p`
  margin: 0;
  padding-left: 16px;
  flex: 1;
  color: inherit;
  font-weight: 300;
`;

export const Records = styled.div`
  margin: 0;
  padding-left: 16px;
  min-width: 100px;
  color: inherit;
  font-weight: 300;
`;