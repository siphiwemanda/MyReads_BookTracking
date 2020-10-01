import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from './shelf'
import * as BooksAPI from '../BooksAPI'

 class HomePage extends Component{
  constructor(props){
    super(props)
    this.state ={
      allBooks: []
    }
    }
    componentDidMount(){
      BooksAPI.allBooks().then(response => {
        this.setState({allBooks: response})
        console.log(response)
        })
    }
  render(){
    return(

    <div className="list-books">
        <div className="list-books-title">
        <h1>The Banned Book Project</h1>
      </div>

      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link
              className="close-search"
              to="/"
            >Close </Link>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author"
                     value = {this.state.find}
                     onChange={(event)=> this.updateFind(event.target.value)}/>
            </div>
      </div>
        </div>
      </div>


      <div className="list-books-content">
        <div>
          <Shelf
              Name="Books"
              Allbooks={this.state.allBooks}
              />

          <Shelf
            Name="Search Results"
            Allbooks={this.state.allBooks}
          />
        </div>
        </div>
        <div className="open-search">
              <Link to='/Search'>Add a book</Link>
        </div>
    </div>
  );
}
}

export default HomePage;
