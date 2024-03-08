/* eslint-disable import/no-cycle */
import { useUserContext } from './context';

export function Sidebar() {
  const user = useUserContext();

  return (
    <div>
      <div>
        {user.name}
      </div>
      <div>
        Subscription Status:
        {' '}
        {user.isSubscribed ? 'Subscribed' : 'Not Subscribed'}
      </div>
    </div>
  );
}

export function Profile() {
  const user = useUserContext();

  return (
    <div>
      <div>
        {user.name}
      </div>

    </div>
  );
}
