import PropTypes from 'prop-types';
import {
  StatisticsSection,
  TitleBox,
  Title,
  StatisticsList,
  StatisticsItem,
  StatisticsLabel,
  StatisticsPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && (
        <TitleBox>
          <Title>{title}</Title>
        </TitleBox>
      )}
      <StatisticsList>
        {stats.map(stat => (
          <StatisticsItem key={stat.id}>
            <StatisticsLabel>{stat.label}</StatisticsLabel>
            <StatisticsPercentage>{stat.percentage}%</StatisticsPercentage>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
