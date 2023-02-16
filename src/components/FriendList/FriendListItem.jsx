import PropTypes from 'prop-types';
import {
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendListItem.styled';

export const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;

  return (
    <>
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" />
      <FriendName className="name">{name}</FriendName>
    </>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
