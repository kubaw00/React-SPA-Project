import React from 'react';
import Article from '../components/Article'


const articles = [
    {
        id:1,
        title: "Czym jest teoria strun?",
        author: "Jan Nowak",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cumque dolore veritatis impedit corrupti asperiores, velit quod praesentium, eos necessitatibus quam illum atque dolorum dignissimos fugiat, aspernatur cupiditate odio saepe?"
    },
    {
        id:2,
        title: "Czym jest teoria względności?",
        author: "Jan Kasza",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cumque dolore veritatis impedit corrupti asperiores, velit quod praesentium, eos necessitatibus quam illum atque dolorum dignissimos fugiafsdfdft, aspernatur cupiditate odio saepe?"
    },
    {
        id:3,
        title: "Dymanika",
        author: "Izydor Andrus",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cumque dolore veritatis sdfsdfimpedit corrupti asperiores, velit quod praesentium, eos necessitatibus quam illum atque dolorum dignissimos fugiafsdfdft, aspernatur cupiditate odio saepe?"
    },

]

const HomePage = () => {
   
   const artList = articles.map(article => (
       <Article 
       key={article.id} 
       {...article}
       />
   ))
    return ( 
        <div className="home">
            <h1>Dzień dobry, oto lista nowości!</h1>
            {artList}
        </div>
     );
}
 
export default HomePage;