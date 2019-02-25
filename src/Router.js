import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UsersContainer from '../src/users/usersContainer'
import PostsContainer from '../src/posts/postsContainer'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class BlogRouter extends Component {

    homeNotify = () => toast("Home page", { autoClose: 2500 });
    usersNotify = () => toast("Users page", { autoClose: 2500 });
    postsNotify = () => toast("Posts page", { autoClose: 2500 });

    render(){
    return (
  <Router>
    <div>
      <ul>
        <li key="home">
          <Link to="/" onClick = {this.homeNotify}>Home</Link>
        </li>
        <li key="user">
          <Link to="/users" onClick = {this.usersNotify}>Users</Link>
        </li>
        <li key="post">
          <Link to="/posts" onClick = {this.postsNotify}>Posts</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/users" component={UsersContainer} />
      <Route path="/posts" component={PostsContainer} />
    </div>
  </Router>
    );
    }
}

const Home = () => {
    return (
        <h1>This is Home Page</h1>
    )
}

export default BlogRouter;