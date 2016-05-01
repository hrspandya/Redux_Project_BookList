import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectBook from '../actions/index';

class BookList extends React.Component{

  constructor(props){
    super(props);
  }

  renderList(){
    var that = this;
    return this.props.books.map(function(book){
      debugger;
      return (
        <li key={book.title}
            onClick={() => that.props.selectBook(book)}
            className="list-group-item">
            {book.title}
        </li>
      );
    });
  }

  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state){
  //whatever returns from this method is given to the BookList this.props
  return {
    books : state.books
  };
}

//Anything returned from this method is givn to the BookList props
function mapDispatchToProps(dispatch){
  // whatever selectBook is called, the result should be passed
  // to all to our reducers
  return bindActionCreators({ selectBook : selectBook }, dispatch);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
