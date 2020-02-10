import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       currentUser: null
//     };
//   }

//   unsubscribeFromAuth = null;

//   componentDidMount() {
//     this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
//       this.setState({ currentUser: user });
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribeFromAuth();
//   }

const onAuthStateChange = callback => {
  return auth.onAuthStateChanged(user => {
    if (user) {
      callback(user);
    } else {
      callback(false);
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
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
