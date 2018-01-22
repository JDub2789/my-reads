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



  changeShelf = (event) => {
    // console.log('clicked')
    newShelf = event.target.value
    if (this.props.changedShelf)
      this.props.changedShelf(newShelf)
    console.log(newShelf)
    console.log(this.props.changedShelf)
  }

  moveBook(book, shelf) {
    BooksAPI.update(book, shelf).then(book => {
      this.setState(state => ({
        shelf: newShelf
      }))
    })
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
