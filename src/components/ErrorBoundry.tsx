import React, { Component, ErrorInfo, ReactNode } from "react";
interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error:Error;
  errorInfo:ErrorInfo;
}

export class ErrorBoundary extends Component<Props,State> {
    public state: State = {
      hasError: false,
      error:{name:"",message:""},
      errorInfo:{
        componentStack: ""
      }
    };
    
  
  componentDidCatch(error:Error, errorInfo:ErrorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })

    //Log errors in files from here
  }
  
  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}