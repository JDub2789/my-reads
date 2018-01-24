import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class BookSearch extends Component {

  state = {
    availableBooks: [],
    query: ''
  }
  updateQuery = (query) => {
    this.setState({ query: query } )
  }

  getShelf = (value, selectedBook) => {
    const newBook = (this.state.availableBooks.filter(book => book.id === selectedBook.book.id))
    newBook[0].shelf = value
    this.props.onGetShelf(newBook[0], value)
  }

  filterBooks() {
    const filteredBooks = this.props.shelvedBooks.forEach(shelvedBook => {
      this.state.availableBooks.map((book) => {
        if (book.id === shelvedBook.id) {
          book.shelf = shelvedBook.shelf
        } else {
          book.shelf = "none"
        }
        return book
      })
      this.setState({availableBooks: filteredBooks})
    })
  }

  render() {

    const {query} = this.state

    if (query) {
      BooksAPI.search(query).then((response) => {
        // let filteredBooks = response.map(searchedBook => {
        //   (this.props.shelvedBooks).forEach(shelvedBook => {
        //     searchedBook.shelf = "none"
        //     if (searchedBook.id === shelvedBook.id) {
        //       searchedBook.shelf = shelvedBook.shelf
        //     }
        //   });
        //   return searchedBook
        // });
        this.setState({availableBooks: response})
        this.filterBooks()
      })
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
            {this.state.availableBooks.map((book) => (
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
