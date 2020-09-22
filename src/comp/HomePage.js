import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from './shelf'
import * as BooksAPI from '../BooksAPI'

 class HomePage extends Component{
  constructor(props){
    super(props)
    this.state ={
      booksArray: []
    }
    }
    componentDidMount(){
    BooksAPI.getAll().then(Responsebooks=>{
    this.setState({booksArray: Responsebooks})
    });
    }
    updatebook = (book, shelf) => {
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
        <Shelf updatebook={this.updatebook}
          Name="Currently Reading"
          Allbooks={this.state.booksArray.filter(x => x.shelf === "currentlyReading")}
        />
        <Shelf updatebook={this.updatebook}
          Name="Want To Read"
          Allbooks={this.state.booksArray.filter(x => x.shelf === "wantToRead")}
        />
        <Shelf updatebook={this.updatebook}
          Name="Read"
          Allbooks={this.state.booksArray.filter(x => x.shelf === "read")}
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
