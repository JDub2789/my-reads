import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'

class WantToRead extends Component {

  state = {
    books: []
  }

  getBooksFromAPI = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
  }
)}

  componentDidMount() {
    this.getBooksFromAPI()
  }

  getShelf = (value, selectedBook) => {
    (this.state.books.filter(book => book.id === selectedBook.wantToReadBook.id))[0].shelf = value
    console.log(this.state.books)
    this.setState(state => ({
      books: this.state.books
    }))
  }

  render() {
    const wantToRead = this.state.books.filter((wantToReadBooks) => (
      (wantToReadBooks.shelf === 'wantToRead')))

      return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {wantToRead.map((wantToReadBook) => (
            <li key={wantToReadBook.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${wantToReadBook.imageLinks.smallThumbnail})` }}></div>
                  <div className="book-shelf-changer">
                    <select defaultValue="wantToRead" onChange={(event, selectedBook) => this.getShelf(event.target.value, {wantToReadBook})}>
                      <option value="none" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{wantToReadBook.title}</div>
                <div className="book-authors">{wantToReadBook.authors}</div>
                <div className="book-authors">{wantToReadBook.shelf}</div>
                </div>
              </li>
          ))}
            </ol>
          </div>
        </div>
)
}
}

export default WantToRead
