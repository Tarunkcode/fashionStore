import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component.jsx";
import "./pages/homepage/homepage.styles.scss";
// import HatsPage from "./pages/homepage/homepage.component";
const HatsPage = () => (
  <div>
    <h1> HATS PAGE </h1>
  </div>
);
function App() {
  return (
    <div>
      <Switch>
        {/* Switch to stop us or keep control to not render multiple components at same time accidently */}
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
