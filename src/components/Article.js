import React from 'react';

const Article = ({title, text, author, key}) => {
    
    return ( 
        <article key={key}>
           <h2>{title}</h2>
           <small>{author}</small>
           <p>{text}</p>
       </article>
     );
}
 
export default Article;