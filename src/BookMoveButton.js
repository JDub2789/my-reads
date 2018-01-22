import React, {Component} from 'react'
import BooksApp from './App.js'
class BookMoveButton extends Component {

  changeShelf = (event) => {
    // console.log('clicked')
    let newShelf = event.target.value
    if (this.props.changedShelf)
      this.props.changedShelf(newShelf)
    console.log(newShelf)
    console.log(this.props.changedShelf)
  }


  render() {
    return (
      <div className="book-shelf-changer">
        <select onChange={this.changeShelf}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookMoveButton
