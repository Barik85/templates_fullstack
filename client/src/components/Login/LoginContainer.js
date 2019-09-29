import { connect } from 'react-redux';
import { loginUser, registerUser } from './login_actions';
import LoginPage from './LoginPage';

const mSTP = state => state;
const mDTP = { loginUser, registerUser };

export default connect(
  mSTP,
  mDTP
)(LoginPage);
