import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SingnInAndSignUpPage from "./pages/sign-in+sign-up/sign-in+sign-up.component";
import "./styles.css";
import {
  auth,
  createUserProfileDocument,
  onAuthStateChanged
} from "./firebase/firebase.utils";
import { onSnapshot } from "firebase/firestore";
import {setCurrentUser} from './redux/user/user.actions';
import {connect} from 'react-redux';

class App extends React.Component {
 
  unsubscribeFromAuth = null;

  componentDidMount() {
   const {setCurrentUser} = this.props;
   
    this.unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
      
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        onSnapshot(userRef, (snapShot) => {
         setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          // console.log(this.state);
        });
      }

      setCurrentUser( userAuth );
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          {/* Switch to stop us or keep control to not render multiple components at same time accidently */}
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SingnInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
