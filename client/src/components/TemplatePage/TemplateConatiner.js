import { connect } from 'react-redux';
import TemplatePage from './TemplatePage';

const mSTP = state => ({ token: state.token });

export default connect(mSTP)(TemplatePage);
