import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import Section from './Section/Section';

import SharedLayout from './SharedLayout/SharedLayout';
// import Home from '../pages/Home/Home';
// import Register from '../pages/Register/Register';
// import Login from '../pages/Login/Login';
// import Contacts from '../pages/Contacts/Contacts';

import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { fetchContacts } from '../redux/operations';

import { useAuth } from '../hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

import { lazy } from 'react';
const Home = lazy(() => import('../pages/Home/Home'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const Login = lazy(() => import('../pages/Login/Login'));
const Register = lazy(() => import('../pages/Register/Register'));

function App() {
  // const { items, isLoading, error } = useSelector(getContacts);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />

          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          {/* <Route path="*" element={<Navigation to="/" />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// <Section title="Phonebook">
//         <ContactForm />
//       </Section>

//       <Section title="Contact">
//         <Filter />
//         {isLoading && <p>Loading contacts...</p>}
//         {error && <p>{error}</p>}
//         {items.length > 0 && <ContactList />}
//         {/* {isLoading && !error && <b>Loading contacts...</b>} */}
//       </Section>
