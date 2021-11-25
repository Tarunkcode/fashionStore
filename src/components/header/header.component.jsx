import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crawn.svg";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import { signOut } from "firebase/auth";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>

      <Link className="option" to="/contact">
        CONTACT
      </Link>

      {currentUser ? (
        <div className="option" onClick={() => signOut(auth)}>
          {" "}
          SIGN OUT{" "}
        </div>
      ) : (
        <Link className="option" to="/signin">
          {" "}
          SIGN IN{" "}
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);
// destructure in advanced way to pass props as we want currentUser from user and hidden values from cart
const mapSateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});
export default connect(mapSateToProps)(Header);
