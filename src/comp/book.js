import React, { Component } from 'react';
import yellow from '../icons/yellow.png'

class Book extends Component{
  render(){
    return(
      <li>
      <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{
          width: 128,
          height: 174,
          backgroundImage: `url("${yellow}")`}}>
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
      {"No Title..."}
      </div>
      <div className="book-authors">
      { "No Authors..."}
      </div>

    </div>
  </li>

)
}}
export default Book;
