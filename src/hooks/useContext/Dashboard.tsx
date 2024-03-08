/* eslint-disable import/no-cycle */
import { Profile, Sidebar } from './Components';

export default function Dashboard() {
  return (
    <div>
      <Sidebar />
      <Profile />
    </div>
  );
}
