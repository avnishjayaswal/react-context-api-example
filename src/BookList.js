import React, { useContext } from 'react' ;
import Books from './Books' ;
import { BookContext } from './Bookcontext';


const BookList = () => {
      
   const [books, setBooks] = useContext(BookContext) ;

    return (

        books.map(book => (
            <Books name={book.name} price={book.price} key={book.id} />
        )) 
    )
} ;

export default BookList ;

