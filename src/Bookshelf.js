import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
import * as BooksAPI from './BooksAPI'

class Bookshelf extends Component {

  state = {
    books: []
  }

  changeShelf = (b, s) => {
    BooksAPI.update(b, s).then((response) => {
      this.state.books.push(response)
      // console.log(newBooks)
      this.setState({books: this.state.books})
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  render() {
    return (
      <div className="list-books-content">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <Shelf books={this.state.books} shelf='wantToRead' title='Want to Read' onGetShelf={this.changeShelf} />
          <Shelf books={this.state.books} shelf='currentlyReading' title='Currently Reading' onGetShelf={this.changeShelf} />
          <Shelf books={this.state.books} shelf='read' title='Read' onGetShelf={this.changeShelf} />

          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
      </div>
    </div>
    )
  }
}

export default Bookshelf
