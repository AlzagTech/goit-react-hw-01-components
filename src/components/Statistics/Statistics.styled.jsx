import styled from '@emotion/styled';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export const StatisticsSection = styled.section`
  background-color: #fff;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;

  border-radius: 4px;
  margin-bottom: 15px;

  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;

export const TitleBox = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 16px;
  color: #4c555d;
`;

export const StatisticsList = styled.ul`
  display: flex;
  color: #ffffff;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  flex-basis: calc(100% / 5);

  padding-top: 10px;
  padding-bottom: 10px;

  background-color: ${getRandomHexColor};
`;

export const StatisticsLabel = styled.span`
  margin-bottom: 4px;
  font-size: 12px;
`;

export const StatisticsPercentage = styled.span`
  font-size: 16px;
`;
