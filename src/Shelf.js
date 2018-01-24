import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'

class Shelf extends Component {
  // state = {
  //   books: []
  // }
  //
  // componentDidMount() {
  //   BooksAPI.getAll().then((books) => {
  //     this.setState({books})
  //   })
  // }

  getShelf = (value, selectedBook) => {
    const allBooks = this.props.books.filter((book) => book.id !== selectedBook.book.id)
    const changedBook = this.props.books.filter(book => book.id === selectedBook.book.id)
    changedBook[0].shelf = value
    allBooks.push(changedBook[0])
    this.props.onGetShelf(allBooks)
  }

  render() {
    const thisShelf = this.props.books.filter((book) => (
      (book.shelf === this.props.shelf)))

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {thisShelf.map((book) => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                  <div className="book-shelf-changer">
                    <select onChange={(event, selectedBook) => this.getShelf(event.target.value, {book})} defaultValue={this.props.shelf}>
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
                <div className="book-authors">{book.shelf}</div>
                </div>
              </li>
          ))}
            </ol>
          </div>
        </div>
    )
  }
}

export default Shelf
