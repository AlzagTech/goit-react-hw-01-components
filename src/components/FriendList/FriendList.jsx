import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { UserFriendList, UserFriendItem } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <UserFriendList>
      {friends.map(friend => (
        <UserFriendItem key={friend.id}>
          <FriendListItem friend={friend} />
        </UserFriendItem>
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
