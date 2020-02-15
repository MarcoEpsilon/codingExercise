import UserList from '../components/userlist';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    users: state.users,
    loadingStatus: state.loadingStatus
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);