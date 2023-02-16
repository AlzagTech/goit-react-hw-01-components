import styled from '@emotion/styled';

export const UserCard = styled.div`
  background-color: #fff;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;

  border-radius: 4px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  margin-bottom: 15px;
`;

export const UserDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 30px;
  padding-bottom: 30px;
`;

export const UserAvatar = styled.img`
  width: 100px;
  border-radius: 50%;
  margin-bottom: 20px;

  background-color: #f3f6f9;
`;

export const UserName = styled.p`
  margin-bottom: 10px;

  font-size: 18px;
  font-weight: bold;
  color: #122236;
`;

export const UserTag = styled.p`
  color: #768696;
  margin-bottom: 5px;
`;

export const UserLocation = styled.p`
  color: #768696;
`;

export const StatsList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  background-color: #f3f6f9;
  border: 1px solid #e4e9f0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 10px;
  padding-bottom: 10px;
  flex-basis: calc((100% - 2px) / 3);

  & + & {
    border-left: 1px solid #e4e9f0;
  }
`;

export const StatsLabel = styled.span`
  margin-bottom: 4px;
  color: #768696;
`;

export const StatsQuantity = styled.span`
  font-weight: bold;
  color: #4c555d;
`;
