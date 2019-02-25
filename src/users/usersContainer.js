import React, { Component } from 'react'
import User from './user'
import { addUsers, displayUsers} from './action'
import { connect } from 'react-redux';
import axios from 'axios';

class UsersContainer extends Component {
    
    componentWillMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
             .then(res => {
                const usersData = res.data;
                this.props.addUsers(usersData);
                })
             .catch(error=> console.log(error))

    }
    render() {
        console.log(this.props);
        return (<User 
            users={this.props.usersReducer.users} 
            />)
    }
}

const mapStateToProps = (state) => {
    return state;
}
const mapDispatchToProps = {
    addUsers, displayUsers
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);