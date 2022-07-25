import { React, lazy, Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Loader } from 'components/Loader';
import { ProtectedRoute } from 'components/ProtectedRoute/ProtectedRoute';

const RegistrationForm = lazy(() =>
  import('../components/UserAccountForms/RegistrationForm')
);
const LoginForm = lazy(() => import('components/UserAccountForms/LogInForm'));
const UserMenu = lazy(() => import('components/UserAccountForms/UserMenu'));
const PhonebookForm = lazy(() =>
  import('../components/PhonebookForms/PhonebookForm')
);

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader type="spokes" color="#3f72b5" />}>
        <Routes>
          <Route
            path="/"
            element={<ProtectedRoute isOnlyForNotAuthenticated={true} />}
          >
            <Route path="registration" element={<RegistrationForm />} />
            <Route path="login" element={<LoginForm />} />
            {/* <Route path="phonebook" element={<PhonebookForm />}></Route>
            <Route path="usermenu" element={<UserMenu />}></Route> */}
          </Route>

          <Route path="/" element={<ProtectedRoute />}>
            <Route path="phonebook" element={<PhonebookForm />}></Route>
            <Route path="usermenu" element={<UserMenu />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
