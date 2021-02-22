import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
import Post from '../../../components/Post/Post';
import './Posts.css';

const CancelToken = axios.CancelToken;
let cancel;

class Posts extends Component {

    asyncRequest = null;
    state = {
        posts: []
    };

    componentDidMount() {
        this.asyncRequest = axios.get('/posts', {
            cancelToken: new CancelToken(function executor(c) {
                // An executor function receives a cancel function as a parameter
                cancel = c;
            })
        })
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPost = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    };
                });
                this.setState({ posts: updatedPost });
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentWillUnmount() {
        if (this.asyncRequest) {
            cancel();
        }
    }

    postSelectedHandler = (id) => {
        this.props.history.push('/posts/' + id);
    }

    render() {
        let posts = (<p style={{ textAlign: 'center' }}>Something went wrong...</p>);
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)} />);
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={`${this.props.match.url}/:id`} exact component={FullPost} />
            </div>
        );
    }
}
export default Posts;