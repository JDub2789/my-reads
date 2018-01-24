import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import BookSearch from './BookSearch'
import './App.css'
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {

  state = {
    books: []
  }

  changeShelfSearch = (b, s) => {
    BooksAPI.update(b, s).then((books) => {
      this.setState({books: this.state.books.push(b)})
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }

  render() {

    return (
        <div className="app">
            <Route exact path="/" render={({history}) => (
              <Bookshelf books={this.state.books}/> )}
             />
            <Route exact path="/search" render={({history}) => (
              <BookSearch onUpdateQuery={this.updateQuery} onGetShelf={(newBook, newShelf) =>
                {
                  this.changeShelfSearch(newBook, newShelf)
                }} books={this.state.availableBooks} />)}
            />
          </div>
    )
  }
}

export default BooksApp
