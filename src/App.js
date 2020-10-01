import React, { Component } from 'react';
import './App.css'
import { Route } from 'react-router-dom'
import HomePage from './comp/HomePage.js';
import searchPage from './comp/searchPage.js';

class BooksApp extends Component {

    render() {
    return(
      <div>
      <Route exact path = '/' component={HomePage}/>
      <Route exact path = '/search' component={searchPage}/>

      </div>
    );
  }
}

export default BooksApp
