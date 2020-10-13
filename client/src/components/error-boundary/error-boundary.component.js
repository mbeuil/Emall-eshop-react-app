/** @format */

import React from 'react';
import ErrorFallback from '../error-fallback';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      HasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  return() {
    if (this.state.hasError) {
      return <ErrorFallback>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
