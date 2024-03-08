/* eslint-disable import/no-cycle */
/* eslint-disable max-len */
// useContext is used to pass data to the component tree without having to pass props down manually at every level of the tree
// useContext is used to avoid prop drilling
// useContext is used to avoid passing props through intermediate elements
// useContext is used to avoid passing props through unrelated elements

import { useState } from 'react';
import { DashboardContext } from './context';
import Dashboard from './Dashboard';

export interface User {
  isSubscribed: boolean;
  name: string;
}

export default function Demo() {
  const [user] = useState<User>({
    isSubscribed: true,
    name: 'John Doe',
  });
  return (
    <div>
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </div>
  );
}
