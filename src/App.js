import React, { Component } from 'react';
// import UsersContainer from './users/usersContainer'
// import PostsContainer from './posts/postsContainer'
import BlogRouter from './Router'
import { ToastContainer } from 'react-toastify';

class App extends Component {
  render() {
    return (
      <div >
        <BlogRouter />
        <ToastContainer />
      </div>
    );
  }
}

export default App;
