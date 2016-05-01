export default function selectBook(book){
  //selectBook is an action Creator and needs to return an actions
  // an object with type and metadata for the action
  return {
    type : 'BOOK_SELECTED',
    payload : book
  };
}
