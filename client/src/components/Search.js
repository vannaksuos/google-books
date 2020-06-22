import React, { useState } from "react";
import axios from "axios";
import Book from "./Book";


function Search() {
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);
    const handleChange=(event)=> {
        setQuery(event.target.value) 
        console.log(query)
    }
    const searchBooks=()=> {
        axios.get("/api/google", {params: {q:"title:" + query}}).then((googleBooksData) => {
            console.log(googleBooksData)
            setBooks(googleBooksData.data.items)
        })
    }
    return (
        <div className="input-group mb-3" style={{width: "30%"}} >
            <div className="input-group-prepend">
                <button onClick={searchBooks} className="btn btn-outline-primary" type="button" id="button-addon1">Search</button>
            </div>
            <input onChange={handleChange} type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
            {books.map(b=> {
                return <Book bookInfo={b}/>
            })}
</div>
    
    )
}

export default Search;