import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI'
import Book from './book'


class searchpage extends Component{
  constructor(props){
    super(props)
    this.state = {
      searchArray: [],
      resultsArray: [],
      find: ""
    }
  }

  componentDidMount(){
    console.log(this)
  BooksAPI.getAll()
  .then(searchrespons =>{
    this.setState({searchArray: searchrespons})
  });
}

updateFind =(find) => {
  this.setState({find: find}, this.submitSearch);
}

submitSearch(){
  if(this.state.find ===''|| this.state.find === undefined) {
    return this.setState({results:[]});
  }
  BooksAPI.search(this.state.find.trim()).then(searchres=>{
    if(searchres.error){
      return this.setState({resultsArray: []})
    }
  else{
    searchres.forEach(b=> {
      let x = this.state.searchArray.filter(B=> B.id === b.id);
      if(x[0]){
        b.shelf=x[0].shelf;
      }
    });
    return this.setState({resultsArray: searchres});
  }
})
}



  updatebook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(updateResponse => {
      book.shelf = shelf
      this.setState(state =>({
        searchArray: state.searchArray.filter(A=> A.id !== book.id).concat([book])
      }));
    })
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

            <input type="text" placeholder="Search by title or author" value = {this.state.find}
            onChange={(event)=> this.updateFind(event.target.value)}/>
            </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {this.state.resultsArray.map((book, key)=> <Book updatebook={this.updatebook} book={book} key={key} />)
          }
        </ol>
        </div>
      </div>
    );
  }
}

export default searchpage;
