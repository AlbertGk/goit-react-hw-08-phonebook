//Adam Powroznik
// powroznik@gmail.com
// test1234

//Tomasz4 Cruize4
//tomaszcruize4@gmail.com
// test1234

import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../api/requests';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.users.user.name);
  const email = useSelector(state => state.users.user.email);

  const handleLogOut = event => {
    event.preventDefault();
    dispatch(logoutUser());
  };

  return (
    <div>
      <div className={''}>
        <p>Current user: {name}</p>
        <p>{email}</p>
      </div>
      <button type="button" className={''} onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
