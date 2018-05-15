import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Post from '../components/Post/Post';
import Header from './Header/Header';
import Compose from './Compose/Compose';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      baseURL: 'https://practiceapi.devmountain.com/api'
    };

    this.updatePost = this.updatePost.bind( this );
    this.deletePost = this.deletePost.bind( this );
    this.createPost = this.createPost.bind( this );
  }
  
  componentDidMount() {
    axios.get(this.state.baseURL+'/posts').then( results => { this.setState({ posts: results.data })})
  }

  updatePost(id, text) {
    axios.put(`${this.state.baseURL}/posts?id=${id}`,{text: text}).then( results => { this.setState({ posts: results.data })})
  }

  deletePost(id) {
    axios.delete(`${this.state.baseURL}/posts?id=${id}`).then( results => { this.setState({ posts: results.data })})
  }

  createPost( text ) {
    axios.post(`${this.state.baseURL}/posts`,{text: text}).then( results => { this.setState({ posts: results.data })})
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">

          <Compose 
            createPostFn={this.createPost}
          />

          {posts.map( post => (
            <Post key={post.id} 
              id={post.id}
              text={post.text}
              date={post.date}
              updatePost={this.updatePost}
              deletePostFn={this.deletePost}
            />
          ))}
          
        </section>
      </div>
    );
  }
}

export default App;
