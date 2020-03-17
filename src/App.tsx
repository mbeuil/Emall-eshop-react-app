/** @format */

import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndRegisterPage from './pages/sign-in-and-register/sign-in-and-register.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { selectCurrentUser } from './redux/user/user.selectors';

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  // useEffect(() => {
  // const unsubscribe = auth.onAuthStateChanged(async (user) => {
  //   if (user) {
  //     const userRef = await createUserProfileDocument(user);
  //     if (userRef) {
  //       userRef.onSnapshot((snapShot) => {
  //         const userInfos = snapShot.data();
  //         dispatch(setCurrentUser(userInfos));
  //       });
  //     }
  //   } else {
  //     dispatch(setCurrentUser(undefined));
  //   }
  // });
  // return () => {
  //   unsubscribe();
  // };
  // }, [dispatch]);

  const handleRedirection = () => {
    return currentUser ? <Redirect to="/" /> : <SignInAndRegisterPage />;
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/signin" render={handleRedirection} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
