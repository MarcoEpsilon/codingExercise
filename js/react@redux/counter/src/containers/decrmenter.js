import DecrementButton from '../components/decrementbutton';
import { subAction } from "../actions/actions";
import { connect } from 'react-redux';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch(subAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DecrementButton);