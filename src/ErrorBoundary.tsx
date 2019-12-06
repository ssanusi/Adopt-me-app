import React, { Component, ErrorInfo } from "react";
import { Link, Redirect } from "@reach/router";

export default class ErrorBoundary extends Component {
  public state = { hasError: false, redirect : false };

  public static getDerivedStateFromError() {
    return { hasError: true };
  }

  public componentDidCatch(error:Error, info:ErrorInfo) {
    // tslint:disable-next-line: no-console
    console.error("ErrorBoundary catch an error", error, info);
  }

  public componentDidUpdate() {
    if(this.state.hasError){
      setTimeout(() => this.setState({ redirect : true}), 5000)
    }
  }
  public render() {
    if(this.state.redirect){
      return <Redirect to="/" />
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
