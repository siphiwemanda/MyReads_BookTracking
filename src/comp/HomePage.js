import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI'
import Book from "./book";

 class HomePage extends Component{
  constructor(props){
    super(props)
    this.state ={
      allBooks: [],
      find: ""
    }
    }
    componentDidMount(){
      BooksAPI.allBooks().then(response => {
        this.setState({allBooks: response})
        console.log(response)
        })
    }
   updateFind =(find) => {
     this.setState({find: find});
   }

   search(books, searchTerm){
     return books.filter(book => book.Title.includes(searchTerm) || book.Author.includes(searchTerm))
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
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title, author or country"
                     value = {this.state.find}
                     onChange={(event)=> this.updateFind(event.target.value)}/>
            </div>
      </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.search(this.state.allBooks, this.state.find).map((book, key)=>
              <Book  book={book} key={key} />)}
          </ol>
        </div>
      </div>
    </div>
  );
}
}

export default HomePage;
