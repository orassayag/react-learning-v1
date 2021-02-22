import React, { Component } from 'react';
// import axios from 'axios';
/* import { Route, Link } from 'react-router-dom'; */
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
/* import FullPost from './FullPost/FullPost'; */
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost';
const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true
    }

    render() {
        let newPosts = null;
        if (this.state.auth) {
            newPosts = (<Route path="/new-post" component={AsyncNewPost} />);
            /*             newPosts = (<Route path="/new-post" component={NewPost} />); */
        }

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                // pathname: this.props.match.url + '/new-post',
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                            {/*                             <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                // pathname: this.props.match.url + '/new-post',
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</Link></li> */}
                        </ul>
                    </nav>
                </header>
                {/*                 <Route path="/" exact render={() => { return (<h1>Home</h1>); }} />
                <Route path="/" exact render={() => { return (<h1>Home 2</h1>); }} /> */}
                <Switch>
                    {newPosts}
                    <Route path="/posts" component={Posts} />
                    {/* In case of 404 pages, don't specify path */}
                    <Route render={() => { return (<h1>Not found</h1>); }} />
                    {/*                     <Redirect from="/" to="/posts" /> */}
                    {/*                     <Route path="/" component={Posts} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;