import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import BookSearch from './BookSearch'
import './App.css'
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {

  state = {
    books: [],
    availableBooks: [],
    query: ''
  }

  changeShelf = (newBooks) => {
    this.setState({books: newBooks})
  }

  changeShelfSearch = (newBook) => {
    console.log(this.state.books)
    this.setState({books: this.state.books.push(newBook)})
    console.log(this.state.books)
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }

  updateQuery = (query) => {
    this.setState({ query: query } )
  }

  render() {
    const {query} = this.state

    if (query) {
      BooksAPI.search(query).then((response) => {
        this.setState({availableBooks: response})
      })
    }

    return (
        <div className="app">
            <Route exact path="/" render={({history}) => (
              <Bookshelf books={this.state.books}/> )}
             />
            <Route exact path="/search" render={({history}) => (
              <BookSearch onUpdateQuery={this.updateQuery} onGetShelf={(newBook) =>
                {
                  this.changeShelfSearch(newBook)
                  history.push('/')
                }} books={this.state.availableBooks} />)}
            />
          </div>
    )
  }
}

export default BooksApp
