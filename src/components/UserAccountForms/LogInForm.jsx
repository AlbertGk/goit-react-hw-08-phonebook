import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

import { loginUser } from '../../api/requests';

import styles from '../../Styles/PageStyles.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const userRequestStatus = useSelector(state => state.users.user.status);
  const user = useSelector(state => state.users.user?.email);
  const usernameId = useRef(nanoid());
  const passwordId = useRef(nanoid());
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    password: '',
    email: '',
  });

  useEffect(() => {
    console.log(user);
    if (user) {
      navigate('/phonebook');
    }
    // eslint-disable-next-line
  }, [user]);

  const handleSubmit = event => {
    event.preventDefault();

    const { email, password } = formValues;

    dispatch(
      loginUser({
        email,
        password,
      })
    );
  };

  const handleInputValueChange = event => {
    setFormValues(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className={styles.container}>
      <h1>Welcome to the phone book application.</h1>
      <h2>Log in to see your contacts and add more:</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor={usernameId.current}>Email:</label>
        <input
          autoFocus
          id={usernameId.current}
          name="email"
          placeholder="Enter your email"
          value={formValues.email}
          onChange={handleInputValueChange}
          className={styles.input__field}
        />

        <label htmlFor={passwordId.current}>Password:</label>
        <input
          id={passwordId.current}
          name="password"
          placeholder="Enter your password"
          type="password"
          value={formValues.password}
          onChange={handleInputValueChange}
          className={styles.input__field}
        />

        <button
          className={styles.input__button}
          appearance="primary"
          type="submit"
          disabled={
            userRequestStatus === 'fetching' ||
            !formValues.password ||
            !formValues.email
          }
        >
          Submit
        </button>

        <Link to="/registration" className={styles.link__text}>
          Didn't have account? Register instead
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
