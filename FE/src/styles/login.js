import styled from '@emotion/styled';

export const Container = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.h1`
  margin: 0;
  font-weight: 500;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.label``;

export const Input = styled.input`
  padding: 12px;
  font-family: 'Pretendard';
  font-size: 15px;
  font-weight: 400;
  border: 1px solid var(--natural-300);
  border-radius: 8px;
  background-color: var(--white);

  &::placeholder {
    color: var(--natural-700);
    font-size: 15px;
    font-weight: 300;
    font-family: 'Pretendard';
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SubmitButton = styled.button`
  padding: 12px;
  color: var(--white);
  font-family: 'Pretendard';
  font-size: 15px;
  font-weight: 400;
  border: none;
  border-radius: 8px;
  background-color: var(--primary-500);
`;

export const CancelButton = styled.button`
  padding: 12px;
  color: var(--natural-900);
  font-family: 'Pretendard';
  font-size: 15px;
  font-weight: 400;
  border: none;
  border-radius: 8px;
  background-color: var(--natural-300);
`;