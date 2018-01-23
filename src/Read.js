import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'

class Read extends Component {

  state = {
    books: []
  }

  getShelf = (value, selectedBook) => {
    (this.state.books.filter(book => book.id === selectedBook.readBook.id))[0].shelf = value
    console.log(this.state.books)
    this.setState(state => ({
      books: this.state.books
    }))
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  render() {
    const read = this.state.books.filter((readBook) => (
      (readBook.shelf === 'read')))

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {read.map((readBook) => (
            <li key={readBook.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${readBook.imageLinks.smallThumbnail})` }}></div>
                  <div className="book-shelf-changer">
                    <select onChange={(event, selectedBook) => this.getShelf(event.target.value, {readBook})} defaultValue="read">
                      <option value="none" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{readBook.title}</div>
                <div className="book-authors">{readBook.authors}</div>
                <div className="book-authors">{readBook.shelf}</div>
                </div>
              </li>
          ))}
            </ol>
          </div>
        </div>
      )
}
}

  export default Read
