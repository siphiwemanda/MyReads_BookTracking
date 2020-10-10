import React, { Component } from 'react';
import * as BooksAPI from "../BooksAPI";

class Book extends Component{
  constructor(props) {
    super(props);
    this.sayHello = this.sayHello.bind(this);
  }

  sayHello(book) {
    BooksAPI.oneBooks(book).then(res => {
      console.log(res)
    })
  }
  render(){
    return(
      <li>
      <div className="book">
      <div className="book-top">
        <div className="book-cover" onClick={() => this.sayHello(this.props.book.id)} style={{
          width: 128,
          height: 174,
          backgroundImage: `url("${this.props.book["Book cover"]}")`}}>
        </div>
      </div>
      <div className="book-title" >
      {this.props.book.Title}
      </div>
      <div className="book-authors">
      {this.props.book.Author}
      </div>

    </div>
  </li>

)
}}
export default Book;
