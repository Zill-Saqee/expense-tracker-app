import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ExpenseTracker from "./components/ExpenseTracker";

function App() {
  return (
    <Router>
      <div>
        <Route
          exact
          path="/"
          render={(props) => (
            <React.Fragment>
              <ExpenseTracker />
            </React.Fragment>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
