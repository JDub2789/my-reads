import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class Bookshelf extends Component {

  state = {
    books: []
  }

  getShelf = (value, book) => {
    let newShelf = value
    let bookShelf = book
    console.log(newShelf)
    console.log(bookShelf)
    this.changeShelf(bookShelf, newShelf)
  }

  changeShelf(b, s) {
    BooksAPI.update(b, s).then((s) => {
      this.setState((s) => ({
        books: b.s = s
      }))
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  render() {
    const wantToRead = this.state.books.filter((wantToReadBooks) => (
      (wantToReadBooks.shelf === 'wantToRead')))

    const read = this.state.books.filter((readBook) => (
      (readBook.shelf === 'read')))

    const currentlyReading = this.state.books.filter((currentBook) => (
      (currentBook.shelf === 'currentlyReading')))

    return (

      <div className="list-books-content">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
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
                              <select onChange={(event, book) => this.getShelf(event.target.value, {wantToReadBook})}>
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

                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                      {currentlyReading.map((currentBook) => (
                        <li key={currentBook.id}>
                          <div className="book">
                            <div className="book-top">
                              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${currentBook.imageLinks.smallThumbnail})` }}></div>
                              <div className="book-shelf-changer">
                                <select onChange={this.getShelf}>
                                  <option value="none" disabled>Move to...</option>
                                  <option value="currentlyReading">Currently Reading</option>
                                  <option value="wantToRead">Want to Read</option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                                </select>
                              </div>
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
                              <select onChange={this.getShelf}>
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
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
      </div>

    </div>
    )
}
}












    //
    //
    //   <div>
    //     <div className="list-books">
    //       <div className="list-books-title">
    //         <h1>MyReads</h1>
    //       </div>
    //       <div className="list-books-content">
    //         <div>
    //           <div className="bookshelf">
    //             <h2 className="bookshelf-title">Currently Reading</h2>
    //             <div className="bookshelf-books">
    //               <ol className="books-grid">
                    // {currentBooks = this.state.books.filter((currentBook) => (
                    //   (currentBooks.shelf === 'currentlyReading')
    //                 ))
    //                 <li>
    //                   <div className="book">
    //                     <div className="book-top">
    //                       <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
    //                       <BookMoveButton />
    //                     </div>
    //                     <div className="book-title">{currentBook.title}</div>
    //                     <div className="book-authors">{currentBook.authors}</div>
    //                   </div>
    //                 </li>
    //               }
    //               </ol>
    //             </div>
    //           </div>
    //
    //
          // <div className="open-search">
          //   <Link to="/search">Add a book</Link>
          // </div>
    //     </div>
    //   )}
    // </div>
    // )




export default Bookshelf
