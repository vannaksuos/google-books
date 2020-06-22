import React from "react";
import axios from "axios";




function Book(props) {
    const handleDelete=() => {
        axios.delete("/api/books/" + props.bookInfo._id).then((response)=> {
            console.log(response)
        })
    }
    const handleSave=() => {
        axios.post("/api/books", {bookInfo:props.bookInfo}).then((response)=> {
            console.log(response)
            
        })
    }
    return     (<div>
            {props.bookInfo.title || props.bookInfo.volumeInfo.title}
            {props.saved ? 
            <button onClick={handleDelete}>Delete</button>
            : <button onClick={handleSave}>Save</button>
        }

        </div>)
}

export default Book;