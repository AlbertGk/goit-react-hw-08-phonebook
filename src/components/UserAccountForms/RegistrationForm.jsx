import { useEffect, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { createUser } from '../../api/requests';

import styles from '../../Styles/PageStyles.module.css';

const formValidate = values => {
  if (values.firstname.length < 3) {
    return false;
  }
  if (values.lastname.length < 4) {
    return false;
  }
  if (!values.email.includes('@')) {
    return false;
  }
  if (values.password.length < 7) {
    return false;
  }
  return true;
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const userRequestStatus = useSelector(state => state.users.user.status);

  const inputRef = useRef(); // { current: }
  const firstNameId = useRef(nanoid());
  const lastNameId = useRef(nanoid());
  const emailId = useRef(nanoid());
  const passwordId = useRef(nanoid());

  const [formValues, setFormValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const handleSubmit = event => {
    event.preventDefault();

    const { email, password, firstname, lastname } = formValues;

    dispatch(
      createUser({
        name: `${firstname} ${lastname}`,
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

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const isSubmitButtonEnabled = formValidate(formValues);

  return (
    <div className={styles.container}>
      <h1>Welcome to the phone book application.</h1>
      <h2>Register to create your contact list:</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor={firstNameId.current}>First name:</label>
        <input
          ref={inputRef}
          id={firstNameId.current}
          name="firstname"
          placeholder="Enter your first name"
          value={formValues.firstname}
          onChange={handleInputValueChange}
          className={styles.input__field}
        />

        <label htmlFor={lastNameId.current}>Last name:</label>
        <input
          id={lastNameId.current}
          name="lastname"
          placeholder="Enter your last name"
          value={formValues.lastname}
          onChange={handleInputValueChange}
          className={styles.input__field}
        />

        <label htmlFor={emailId.current}>Email address:</label>
        <input
          id={emailId.current}
          name="email"
          placeholder="Enter your email address"
          value={formValues.email}
          type="email"
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
          type="submit"
          appearance="primary"
          disabled={!isSubmitButtonEnabled || userRequestStatus === 'fetching'}
        >
          Submit
        </button>

        <Link to="/login" className={styles.link__text}>
          Already have an account? Log in
        </Link>
      </form>
    </div>
  );
};

export default RegistrationForm;
