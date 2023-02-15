import PropTypes from 'prop-types';
import {
  UserCard,
  UserAvatar,
  UserDescription,
  UserName,
  UserTag,
  UserLocation,
  StatsList,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from './Profile.styled';

export const Profile = ({ props }) => {
  const { username, tag, location, avatar, stats } = props;

  return (
    <UserCard>
      <UserDescription>
        <UserAvatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </UserDescription>

      <StatsList>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity className="quantity">{stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity className="quantity">{stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity className="quantity">{stats.likes}</StatsQuantity>
        </StatsItem>
      </StatsList>
    </UserCard>
  );
};

Profile.propTypes = {
  props: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number.isRequired),
  }),
};
