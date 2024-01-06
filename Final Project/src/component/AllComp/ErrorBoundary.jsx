import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // This lifecycle method is called when an error occurs in a child component
  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    console.error('Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render a fallback UI when an error occurs
      return (
        <div style={{marginTop:'20px'}}>
          <h2 style={{fontFamily:'League Spartan, sans-serif'}}>Something went wrong!</h2>
          <p style={{fontFamily:'League Spartan, sans-serif'}}>Please try again later.</p>
          </div>
      );
    }

    // Render the child components normally
    return this.props.children;
  }
}

export default ErrorBoundary;
