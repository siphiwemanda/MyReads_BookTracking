import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI'
import Book from './book'


class searchPage extends Component{
    constructor(props){
      super(props)
      this.state = {
      AllBooks: [],
      resultsArray: [],
      find: ""
    }
  }

    componentDidMount(){
      BooksAPI.allBooks()
      .then(response =>{
      this.setState({AllBooks: response})
      });
      }
    updateFind =(find) => {
      this.setState({find: find});
    }

    search(books, searchTerm){
        return books.filter(book => book.Title.includes(searchTerm))
    }



  render(){
    return(
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
         <div className="search-books-results">
          <ol className="books-grid">
          {this.search(this.state.AllBooks, this.state.find).map((book, key)=>
          <Book  book={book} key={key} />)}
          </ol>
        </div>
      </div>
    );
  }
}

export default searchPage;
