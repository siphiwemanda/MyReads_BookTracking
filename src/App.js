import React, { Component } from 'react';
import './App.css'
import { Route } from 'react-router-dom'
import HomePage from './comp/HomePage.js';

class BooksApp extends Component {

    render() {
    return(
      <div>
      <Route exact path = '/' component={HomePage}/>
      </div>
    );
  }
}

export default BooksApp
