import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { UserFriendList } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <UserFriendList>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </UserFriendList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
