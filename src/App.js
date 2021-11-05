import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component.jsx";
// import "./pages/homepage/homepage.styles.scss";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component";
import "./styles.css";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        {/* Switch to stop us or keep control to not render multiple components at same time accidently */}
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
