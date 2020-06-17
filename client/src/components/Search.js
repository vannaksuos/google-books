import React from "react";

function Search() {
    return (

        <div className="input-group mb-3" style={{width: "30%"}} >
            <div className="input-group-prepend">
                <button className="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
            </div>
            <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
</div>
    
    )
}

export default Search;