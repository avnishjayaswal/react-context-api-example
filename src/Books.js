import React from 'react' ;


const Books = ({name , price }) => {

    return (
       <div>
           <p>{name}</p>
           <p>{price}</p>
        </div>
    );

};

export default Books ;