import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SingnInAndSignUpPage from "./pages/sign-in+sign-up/sign-in+sign-up.component";
import "./styles.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        {/* Switch to stop us or keep control to not render multiple components at same time accidently */}
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SingnInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
