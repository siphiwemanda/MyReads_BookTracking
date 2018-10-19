import React from 'react'
import { Link } from 'react-router-dom';
import Shelf from '../shelf'
import * as BooksAPI from '../../BooksAPI'


class Mainpage extends React.Component{

constructor(props){
  super(props)
  this.state(
    books =[]
  )
}


  componentdidmount(){
    BooksAPI.getAll()
    .then(response => {
      console.log(response)
      this.setState((books: repsonse))

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
        <Shelf />
        <Shelf />
        <Shelf />




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
