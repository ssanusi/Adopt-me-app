import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

export default class ErrorBoundary extends Component {
  state = { hasError: false, redirect : false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
     // eslint-disable-next-line
    console.error("ErrorBoundary catch an error", error, info);
  }

  componentDidUpdate() {
    if(this.error.hasError){
      setTimeout(() => this.setTimeout({ redirect : true}, 5000))
    }
  }
  render() {
    if(this.state.redirect){
      return <Redirect to="/" noThrow />
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to back to the home page or wait five seconds.
        </h1>
      );
    }

    return this.props.children;
  }
}
