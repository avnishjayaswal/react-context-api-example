import React , {  createContext ,  useState } from 'react' ;

export const BookContext = createContext() ;

export const BookProvider = (props) => {

     const [books, setBooks] = useState ([
        
        { 
            id: 1,
            name: 'Book1',
            price:'100'  
        },

        { 
            id: 2,
            name: 'Book2',
            price:'100'  
        },

        { 
            id: 3,
            name: 'Book3',
            price:'100'  
        }

    ]) ;   
    
    return (
    <BookContext.Provider value={[books,setBooks]}>
        {props.children}
    </BookContext.Provider>
    );
}; 



