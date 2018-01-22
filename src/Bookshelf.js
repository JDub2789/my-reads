import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead'
import Read from './Read'
import * as BooksAPI from './BooksAPI'

class Bookshelf extends Component {

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

    return (
      <div>
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
