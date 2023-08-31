import React, { Component, ErrorInfo, ReactNode } from "react";
interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error:string | any;
  errorInfo:string | any;
}

export class ErrorBoundary extends Component<Props,State> {
    public state: State = {
      hasError: false,
      error:null,
      errorInfo:null
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