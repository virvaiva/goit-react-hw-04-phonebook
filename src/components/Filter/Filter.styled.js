import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  font-size: 25px;
  font-weight: 600;
`;
export const Input = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 35px;
  outline: transparent;
  padding: 0 8px;
  border: 2px solid black;
  &:hover,
  &:focus {
    border: 3px solid green;
  }
`;
