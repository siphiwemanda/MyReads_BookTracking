import React from 'react'
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI'
import Book from '../book'


class searchpage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      searchArray: [],
      results: [],
      query: ""
    }
  }

  componentDidMount(){
  BooksAPI.getAll()
  .then(searchrespons =>{
    this.setState({searchArray: searchrespons})
  });
}

updateQuery =(query) => {
  this.setState({query: query}, this.submitSearch);
}

submitSearch(){
  if(this.state.query ===''|| this.state.query === undefined) {
    return this.setState({results:[]});
  }
  BooksAPI.search(this.state.query.trim()).then(res=>{
    if(res.error){
      return this.setState({results: []})
    }
  else{
    res.forEach(b=> {
      let f = this.state.searchArray.filter(B=> B.id === b.id);
      if(f[0]){
        b.shelf=f[0].shelf;
      }
    });
    return this.setState({results: res});
  }
})
}



  updatebook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(updateResponse => {
      book.shelf = shelf
      this.setState(state =>({
        booksArray: state.booksArray.filter(A=> A.id !== book.id).concat([book])
      }));
    })
  }

  render(){
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/"Close Link/>
          <div className="search-books-input-wrapper">

            <input type="text" placeholder="Search by title or author" value = {this.state.query}
            onChange={(event)=> this.updateQuery(event.target.value)}/>
            </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
          {this.state.results.map((book, key)=> <Book updatebook={this.updatebook} book={book} key={key} />)
          }
          {this.state.results.length ===0 ? <div> no search results</div> : null
        }
        </div>
      </div>
    );
  }
}

export default searchpage;
