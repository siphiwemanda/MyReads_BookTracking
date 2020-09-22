import React, { Component } from 'react';

class Book extends Component{
  state ={

  };

  render(){
    return(
      <li>
      <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 174,
          backgroundImage: `url("${this.props.book.imageLinks &&
          this.props.book.imageLinks.thumbnail}")`}}>
        </div>
        {/*
        <div className="book-shelf-changer">
            <select value = {this.props.book.shelf || "none"}
            onChange={(e) => {this.props.updatebook(this.props.book, e.target.value)}}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
        */}
      </div>
      <div className="book-title" >
      {this.props.book.title || "No Title..."}
      </div>
      <div className="book-authors">
      {this.props.book.authors || "No Authors..."}
      </div>

    </div>
  </li>

)
}}
export default Book;
