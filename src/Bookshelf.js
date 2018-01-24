import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import WantToRead from './WantToRead'
import CurrentlyReading from './CurrentlyReading'
import Read from './Read'
import * as BooksAPI from './BooksAPI'

class Bookshelf extends Component {

  state = {
    books: [],
    shelf: '',
    shelfTitle: ''
  }

  getShelf = (value, book) => {
    let newShelf = value
    let bookShelf = book
    console.log(newShelf)
    console.log(bookShelf)
    this.changeShelf(bookShelf, newShelf)
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
            <WantToRead />
            <CurrentlyReading />
            <Read />
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
