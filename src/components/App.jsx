import { Profile } from "./profile/Profile";
import { Statistics } from "./statistics/Statisctics";
import user from '../data/user';
import data from '../data/data'

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
      <Statistics title="Upload stats" stats={data}/>
    </div>
  );
};
