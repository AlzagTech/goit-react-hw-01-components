import styled from '@emotion/styled';

export const UserFriendList = styled.ul`
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;

  margin-bottom: 15px;
`;

export const UserFriendItem = styled.li`
  display: flex;
  position: relative;
  align-items: center;
  padding: 8px 16px 8px 28px;

  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;

  & + & {
    margin-top: 8px;
  }
`;
