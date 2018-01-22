import React, {Component} from 'react'
import { Route, Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import Bookshelf from './Bookshelf'
import BookSearch from './BookSearch'
import './App.css'
// import * as BooksAPI from './BooksAPI'

const customHistory = createBrowserHistory()

class BooksApp extends Component {
  state = {
    books: []
  }



  render() {
    return (
      <Router history={customHistory}>
        <div className="app">
            <Route exact path="/" render={() => (
              <Bookshelf /> )}
             />
            <Route exact path="/search" render={({history}) => (
              <BookSearch />)}
            />
          </div>
      </Router>
    )
  }
}

export default BooksApp
