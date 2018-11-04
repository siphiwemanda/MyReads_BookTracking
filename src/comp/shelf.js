import React, { Component } from 'react';
import Book from './book.js'

class Shelf extends Component{
  state ={

  }
  render(){
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.Name}</h2>
        <div className="bookshelf-books">
        <ol className="books-grid">
            {this.props.Allbooks.map((book, key) =>
              < Book updatebook={this.props.updatebook}
            book={book} key ={key} />)}
          </ol>
        </div>
      </div>

    );
  }
}

export default Shelf;
