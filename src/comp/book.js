import React, { Component } from 'react';

class Book extends Component{
  render(){
    return(
      <li>
      <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{
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
