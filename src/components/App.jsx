import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statisctics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import user from '../data/user';
import data from '../data/data';
import friends from '../data/friends';
import transactions from '../data/transactions';

export const App = () => {
  return (
    <div
      // style={{
      //   height: '20vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 16,
      //   color: '#010101'
      // }}
    >
      <Profile props={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
