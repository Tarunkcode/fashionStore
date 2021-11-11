import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SingnInAndSignUpPage from "./pages/sign-in+sign-up/sign-in+sign-up.component";
import "./styles.css";
import {auth, createUserProfileDocument,onAuthStateChanged } from "./firebase/firebase.utils";
import {onSnapshot} from 'firebase/firestore';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

    componentDidMount() {
    this.unsubscribeFromAuth = onAuthStateChanged(auth, async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
       
      onSnapshot(userRef, (snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          {/* Switch to stop us or keep control to not render multiple components at same time accidently */}
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SingnInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
