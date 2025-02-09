import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center p-10">
          <h2 className="text-3xl font-bold text-red-600">Something went wrong</h2>
          <p className="mt-4">Try refreshing the page or checking back later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;