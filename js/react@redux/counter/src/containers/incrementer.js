import IncrementButton from '../components/incrementbutton';
import { addAction } from "../actions/actions";
import { connect } from "react-redux";
const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch(addAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(IncrementButton);