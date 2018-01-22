import React, {Component} from 'react'
import BookMoveButton from './BookMoveButton'
import * as BooksAPI from './BooksAPI'

class CurrentlyReading extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
      console.log(books)
    })
  }

  render() {
    let currentBooks = this.state.books.filter((currentBook) => (
      (currentBook.shelf === 'currentlyReading')))

    return (
        <div className="list-books-content">
          <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              {currentBooks.map((currentBook) => (
                <li key={currentBook.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${currentBook.imageLinks.smallThumbnail})` }}></div>
                      <BookMoveButton />
                    </div>
                    <div className="book-title">{currentBook.title}</div>
                    <div className="book-authors">{currentBook.authors}</div>
                    <div className="book-authors">{currentBook.shelf}</div>
                    </div>
                  </li>
              ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      )


}
}

  export default CurrentlyReading
