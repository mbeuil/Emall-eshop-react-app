/** @format */

// node_modules
import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';

// components
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import LoadingSpinner from './components/loading-spinner/loading-spinner.component';
import ErrorFallback from './components/error-fallback/error-fallback.component';

// Redux dispatch + selector
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

// Lazy loaded components
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndRegisterPage = lazy(() =>
  import('./pages/sign-in-and-register/sign-in-and-register.component'),
);
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  const handleRedirection = () => {
    return currentUser ? <Redirect to="/" /> : <SignInAndRegisterPage />;
  };

  return (
    <>
      <Header />
      <Switch>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<LoadingSpinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route exact path="/signin" render={handleRedirection} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
