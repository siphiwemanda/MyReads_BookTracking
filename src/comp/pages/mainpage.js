import React from 'react'
import { Link } from 'react-router-dom';
import Shelf from '../shelf'
import * as BooksAPI from '../../BooksAPI'


class Mainpage extends React.Component{

  constructor(props){
    super(props)
    this.state ={
      books: []
    }
  }
  componentDidMount(){
    BooksAPI.getAll()
    .then(Responsebooks=>{
      console.log(Responsebooks)
      this.setState({books: Responsebooks})
    });
}

  render(){
    return(

    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
        <Shelf name="currently Reading" books={this.state.books.filter(b=>b.shelf === "currentlyReading")}/>
        <Shelf name="Want to Read" books={this.state.books.filter(b=>b.shelf === "wantToRead")}/>
        <Shelf name="read" books={this.state.books.filter(b=>b.shelf ==="Read")}/>




        </div>
      </div>
      <div className="open-search">
        <Link to ='/Search'Link/>
      </div>
    </div>
  );
}
}


export default Mainpage;
