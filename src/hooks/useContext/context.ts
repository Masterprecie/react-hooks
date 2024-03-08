/* eslint-disable import/no-cycle */
import { createContext, useContext } from 'react';
import { User } from '.';

export const DashboardContext = createContext<User | undefined>(undefined);

export function useUserContext() {
  const user = useContext(DashboardContext);
  if (!user) {
    throw new Error('useUserContext must be used within a DashboardProvider');
  }
  return user;
}
