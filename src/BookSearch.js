import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import escapeRegExp from 'escape-string-regexp'

class BookSearch extends Component {

  state = {
    availableBooks: [],
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query } )
  }

  clearQuery = () => {
    this.setState({query: ''})
  }

  componentDidMount() {
    BooksAPI.getAll().then((availableBooks) => {
      this.setState({availableBooks})
    })
  }

  getShelf = (value, selectedBook) => {
    (this.state.books.filter(book => book.id === selectedBook.wantToReadBook.id))[0].shelf = value
    console.log(this.state.books)
    this.setState(state => ({
      books: this.state.books
    }))
  }

  render() {
    const {query} = this.state
    const {availableBooks} = this.state

    let showingBooks
    if (query) {
      BooksAPI.search(query).then((response) => {
        showingBooks = response
        console.log(showingBooks)
      })
    } else {
      showingBooks = this.state.availableBooks
      console.log(showingBooks)
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" >Close</Link>
          <div className="search-books-input-wrapper">
            {}
            <input onChange={(event) => this.updateQuery(event.target.value)} type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {showingBooks.map((book) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                    <div className="book-shelf-changer">
                      <select defaultValue={book.shelf} onChange={(event, selectedBook) => this.getShelf(event.target.value, {book})}>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}


export default BookSearch
