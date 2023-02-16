import styled from '@emotion/styled';

export const FriendStatus = styled.span`
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: calc(50% - 6px);
    left: 8px;

    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${props => {
      return props.isOnline ? '#59aa5a' : '#fd5253';
    }};
  }
`;

export const FriendAvatar = styled.img`
  width: 48px;
  margin-right: 10px;

  background-color: #f3f6f9;
  border-radius: 4px;
`;

export const FriendName = styled.p``;
