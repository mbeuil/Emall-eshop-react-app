import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import SignInAndRegisterPage from './pages/sign-in-and-register/sign-in-and-register.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

/*
 * onAuthStateChange()
 *
 * function that listen to auth state changes when our application mount
 * throught the useEffect hooks.
 * Get and stores the currentUser data if a user sign in.
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
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setCurrentUser);

    return () => {
      unsubscribe();
    };
  }, []);

  console.log(currentUser);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndRegisterPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
