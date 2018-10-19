import React from 'react'

import './App.css'

import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom'

import Mainpage from './comp/pages/mainpage.js';
import Searchpage from './comp/pages/searchpage.js';
class BooksApp extends React.Component {
    render() {
    return(
      <div>
      <Route exact path ='/' component={Mainpage}/>
      <Route exact path ='/search' component={Searchpage}/>

      </div>
    );
  }
}

export default BooksApp
