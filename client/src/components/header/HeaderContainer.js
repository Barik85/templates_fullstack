import { connect } from 'react-redux';
import Header from './Header';
import { logoutUser } from '../Login/login_actions';
const mSTP = state => ({ authenticated: state.authenticated });
const mDTP = { logoutUser };

export default connect(mSTP, mDTP)(Header);
