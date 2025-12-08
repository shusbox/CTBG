import styled from '@emotion/styled';

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--natural-300);
`;

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
  width: 720px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  border-radius: 8px;
  background-color: var(--white);
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--natural-900);
`;

export const IconContainer = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--natural-700);
  border-radius: 9999px;
  background-color: var(--natural-200);
`;

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 500;
`;

export const Form = styled.form`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Field = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ContentHeader = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
`;

export const ContentBody = styled.p`
  margin: 0;
  color: var(--natural-700);
  font-weight: 300;
`;

export const InputContainer = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InputContent = styled.div`
  display: flex;
  gap: 12px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.label`
  font-size: 14px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  color: var(--natural-900);
  font-size: 14px;
  font-family: 'Pretendard';
  border: 1px solid var(--natural-300);
  border-radius: 4px;
  background-color: var(--white);
  box-sizing: border-box;

  &::placeholder {
    color: var(--natural-700);
    font-size: 14px;
    font-family: 'Pretendard';
  }
`;

export const Scan = styled.div`
  width: 120px;
  height: 120px;
  border: 2px solid var(--natural-300);
  border-radius: 16px;
  background-color: var(--natural-100);
`;

export const ButtonContainer = styled.div`
  align-self: flex-end;
  display: flex;
  gap: 8px;
`;

export const offActiveButton = styled.button`
  padding: 12px;
  color: var(--white);
  font-size: 15px;
  font-family: 'Pretendard';
  border: none;
  border-radius: 4px;
  background-color: var(--natural-400);
`;

export const onActiveButton = styled.button`
  padding: 12px;
  color: var(--white);
  font-size: 15px;
  font-family: 'Pretendard';
  border: none;
  border-radius: 4px;
  background-color: var(--primary-500);
`;

export const CancelButton = styled.button`
  padding: 12px;
  color: var(--natural-900);
  font-size: 15px;
  font-family: 'Pretendard';
  border: 1px solid var(--natural-300);
  border-radius: 4px;
  background-color: var(--natural-100);
`;

export const Success = styled.div`
  padding: 24px;
  width: 100%;
  display: flex;
  gap: 8px;
  color: #06AA06;
  border: 1px solid #06AA06;
  border-radius: 12px;
  background-color: #DEFFDE;
  box-sizing: border-box;
`;

export const SuccessContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SuccessTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
`;

export const SuccessDescription = styled.p`
  margin: 0;
  color: var(--natural-900);
  font-size: 16px;
`;

export const Failed = styled.div`
  padding: 24px;
  width: 100%;
  display: flex;
  gap: 8px;
  color: #FF3333;
  border: 1px solid #FF3333;
  border-radius: 12px;
  background-color: #FFD5D5;
  box-sizing: border-box;
`;

export const FailedContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FailedTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
`;

export const FailedDescription = styled.p`
  margin: 0;
  color: var(--natural-900);
  font-size: 16px;
`;