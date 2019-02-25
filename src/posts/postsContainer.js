import React, { Component } from 'react'
import Post from './post'
import { addPosts } from './action'
import { connect } from 'react-redux';
import axios from 'axios';

class PostsContainer extends Component {
    
    componentWillMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
             .then(res => {
                const postsData = res.data;
                this.props.addPosts(postsData);
                })
             .catch(error=> console.log(error))

    }
    render() {
        return (<Post 
            posts={this.props.postsReducer.posts} 
            />)
    }
}

const mapStateToProps = (state) => {
    return state;
}
const mapDispatchToProps = {
    addPosts
}
export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);