import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import { App } from "./templates/App";
import { Abc } from "./templates/Abc";
import PropTypes from "prop-types";
import { Menu } from "./components/Menu";

function logErrorToMyService(error, componentStack) {
  // Implement your error logging service here
  console.error("Error:", error);
  console.error("Component Stack:", componentStack);
}
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    logErrorToMyService(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary>
    <Router>
      <Menu />
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/abc/:slug?/:id?" component={Abc} exact />
      </Switch>
    </Router>
  </ErrorBoundary>,
);
