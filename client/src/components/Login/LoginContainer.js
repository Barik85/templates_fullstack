import { connect } from 'react-redux';
import { loginUser } from './login_actions';
import LoginPage from './LoginPage';

const mSTP = state => state;
const mDTP = { loginUser };

export default connect(
  mSTP,
  mDTP
)(LoginPage);
