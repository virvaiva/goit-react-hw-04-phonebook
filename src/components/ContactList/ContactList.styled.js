import styled from 'styled-components';

export const ListUl = styled.ul`
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;
export const ListLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid black;
  border-radius: 35px;
  list-style-position: inside;
  width: 450px;
  padding: 20px;
`;
export const BtnDelete = styled.button`
  border: 2px solid #212121;
  border-radius: 35px;
  margin-left: 18px;
  font-size: 18px;
  cursor: pointer;
  &:hover,
  &:focus {
    background: rgb(107, 12, 5);
    color: #fff;
  }
`;
