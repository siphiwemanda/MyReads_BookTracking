import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from './shelf'
import * as BooksAPI from '../BooksAPI'

 class HomePage extends Component{
  constructor(props){
    super(props)
    this.state ={
      booksArray: [],
      newBookArray: []
    }
    }
    componentDidMount(){
    BooksAPI.getAll().then(ResponseBook=>{
    this.setState({booksArray: ResponseBook})
      console.log(ResponseBook)
    });
    BooksAPI.testAPI().then(response => {
      this.setState({newBookArray: response})
      console.log(response)
    })
    }
   updateBook = (book, shelf) => {
     BooksAPI.update(book, shelf)
       .then(updateResponse => {
         book.shelf = shelf;
         this.setState(state =>({
           booksArray: state.booksArray.filter(a => a.id !== book.id).concat([book])
         }));
       });
   }

  render(){
    return(

    <div className="list-books">
        <div className="list-books-title">
        <h1>The Banned Book Project</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf
            Name="Books"
            Allbooks={this.state.booksArray}
          />
          <Shelf
            Name="My Books"
            Allbooks={this.state.newBookArray}
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
