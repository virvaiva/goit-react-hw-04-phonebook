import styled from 'styled-components';

export const Form = styled.form`
  margin: 0 auto;
  border: 4px solid #212121;
  border-radius: 35px;
  width: 350px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 35px;
  gap: 12px;
  font-size: 20px;
  font-weight: 700;
`;
export const Input = styled.input`
  width: 300px;
  height: 24px;
  outline: transparent;
  padding: 0 8px;
  border: 2px solid #000;
  border-radius: 35px;
  &:hover,
  &:focus {
    border: 2px solid rgb(22, 76, 7);
  }
`;
export const Button = styled.button`
  color: #212121;
  padding: 6px;
  font-size: 18px;
  cursor: pointer;
  border: transparent;
  border-radius: 4px;
  box-shadow: 0px 4px 6px rgb(0 0 0 / 15%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  &:hover,
  &:focus {
    background: rgb(22, 76, 7);
    color: #fff;
  }
`;
