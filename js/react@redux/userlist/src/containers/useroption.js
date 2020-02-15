import UserOption from '../components/useroption';
import { connect } from 'react-redux';
import { switchUsers } from '../actions/users';
const mapStateToProps = (state) => ({
    options: state.usersOption
});

const mapDispatchToProps = (dispatch) => ({
    onChange: (event) => {
        dispatch(switchUsers(event.target.value));
        console.log(event.target.value);
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserOption);