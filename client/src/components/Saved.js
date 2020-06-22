import React, {useState} from "react";
import axios from "axios";
import Book from "./Book";


function Saved () {
    const [books, setBooks] = useState([]);
    axios.get("/api/books").then((booksData)=>{
        console.log(booksData)
        setBooks(booksData.data)
    } )
    return(
        <div>
        {books.map(b=> {
            return <Book bookInfo={b} saved={true}/>
        })}

        </div>
    )
}


export default Saved;