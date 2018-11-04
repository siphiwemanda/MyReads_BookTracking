import React, { Component } from 'react';
import './App.css'
import { Route } from 'react-router-dom'
import HomePage from './comp/pages/HomePage.js';
import Searchpage from './comp/pages/searchpage.js';

class BooksApp extends Component {

    render() {
    return(
      <div>
      <Route exact path ='/' component={HomePage}/>
      <Route exact path ='/search' component={Searchpage}/>

      </div>
    );
  }
}

export default BooksApp
