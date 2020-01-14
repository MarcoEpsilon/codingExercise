import Label from "../components/label";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    currentCounter: state.currentCounter,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Label);