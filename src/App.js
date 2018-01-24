import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import BookSearch from './BookSearch'
import './App.css'
import * as BooksAPI from './BooksAPI'
let newShelf
class BooksApp extends Component {
  state = {

  }

  render() {
    return (
        <div className="app">
            <Route exact path="/" render={() => (
              <Bookshelf /> )}
             />
            <Route exact path="/search" render={({history}) => (
              <BookSearch />)}
            />
          </div>
    )
  }
}

export default BooksApp
