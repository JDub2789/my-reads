import React, {Component} from 'react'
import BookMoveButton from './BookMoveButton'
import * as BooksAPI from './BooksAPI'

class Read extends Component {

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
    let read = this.state.books.filter((currentBook) => (
      (currentBook.shelf === 'read')))

    return (
        <div className="list-books-content">
          <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              {read.map((currentBook) => (
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

  export default Read
