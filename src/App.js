import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndRegisterPage from './pages/sign-in-and-register/sign-in-and-register.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import './App.css';

/*
 * onAuthStateChange()
 *
 * function that listen to auth state changes when our application mount
 * throught the useEffect hooks.
 * Get the currentUser data if a user sign in.
 * Set our currentUser to '' if the user sign out.
 *
 * @param: callback function
 */

const onAuthStateChange = callback => {
  return auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        callback({ id: snapShot.id, ...snapShot.data() });
      });
    } else {
      callback(userAuth);
    }
  });
};

const App = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChange(user => dispatch(setCurrentUser(user)));
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  const handleRedirection = () => {
    return currentUser ? <Redirect to="/" /> : <SignInAndRegisterPage />;
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/signin" render={handleRedirection} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
