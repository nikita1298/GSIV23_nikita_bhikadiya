import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux";
import Routes from "./routes";
import { ErrorBoundary } from "./components/ErrorBoundry";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ErrorBoundary>
          <Routes />
        </ErrorBoundary>
      </div>
    </Provider>
  );
}

export default App;
