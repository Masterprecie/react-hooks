/* eslint-disable max-len */
import { useCallback, useState } from 'react';
import { shuffle } from '../../utils';
import Search from './Search';

const allUsers = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eve',
  'Frank',
  'Grace',
  'Heidi',
  'Ivan',
  'Judy',
  'Mallory',

];
export default function UseCallback() {
  // useCallback is a hook that returns a memoized callback
  // useCallback is used to optimize performance
  // useCallback is used to avoid unnecessary re-renders
  // useCallback is used to avoid unnecessary calculations
  // useCallback is used to avoid unnecessary computations
  // useCallback is used to avoid unnecessary expensive operations

  const [users, setUsers] = useState(allUsers);

  const handleSearch = useCallback((text: string) => {
    console.log(users[0]);

    const filteredUsers = allUsers.filter((user) => user.toLowerCase().includes(text.toLowerCase()));
    setUsers(filteredUsers);
  }, [users]);
  // the handleSearch function is memoized and will only change if the users array changes
  return (
    <div className="tutorial">
      <div>
        <button type="button" onClick={() => setUsers(shuffle(allUsers))}>
          shuffle
        </button>

        <Search onChange={handleSearch} />
      </div>
      <ul>
        {users.map((user) => (
          <li key={user}>
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
}
