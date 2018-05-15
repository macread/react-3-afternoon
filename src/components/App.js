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

  updatePost() {
  
  }

  deletePost() {

  }

  createPost() {

  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">

          <Compose />

          {posts.map( post => (
            <Post key={post.id} 
              text={post.text}
              date={post.date}
            />
          ))}
          
        </section>
      </div>
    );
  }
}

export default App;
