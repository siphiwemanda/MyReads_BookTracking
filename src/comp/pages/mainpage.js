import React from 'react'
import { Link } from 'react-router-dom';
import Shelf from '../shelf'
import * as BooksAPI from '../../BooksAPI'


class Mainpage extends React.Component{

  constructor(props){
    super(props)
    this.state ={
      booksArray: []
    }
  }
  componentDidMount(){
    BooksAPI.getAll()
    .then(Responsebooks=>{
      console.log(Responsebooks)
      this.setState({booksArray: Responsebooks})
    });
}
updatebook = (book, shelf) => {
  BooksAPI.update(book, shelf)
  .then(updateResponse => {
    book.shelf = shelf
    this.setState(state =>({
      Books: state.books.filter(b => b.id === book.id).concat({book})
    }));
  })
}



  render(){
    return(

    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
        <Shelf updatebook.{this.props.updateBook} Name="currently Reading" Allbooks={this.state.booksArray.filter(x => x.shelf === "currentlyReading")} />
        <Shelf updatebook.{this.props.updateBook} Name="Want to Read" Allbooks={this.state.booksArray.filter(x => x.shelf === "wantToRead")} />
        <Shelf updatebook.{this.props.updateBook} Name="read" Allbooks={this.state.booksArray.filter(x => x.shelf === "Read")} />
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
