import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crawn.svg";
import "./header.styles.scss";
import {auth} from '../../firebase/firebase.utils';
import {signOut} from 'firebase/auth'
import {connect} from 'react-redux';


const Header = ({currentUser}) => (
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

     { currentUser  
     ? (<div className='option' onClick={() => signOut(auth)}> SIGN OUT </div>) 
     : (<Link className='option' to='/signin'> SIGN IN </Link>)
      }
    </div>
  </div>
);

const mapSateToProps =state => ({
   currentUser : state.user.currentUser
})
export default connect(mapSateToProps)(Header);
