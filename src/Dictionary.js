import React, { useState } from "react";


export default function Dictionary () {

const [searchedWord, setSearchedWord] = useState(" ");

function handleInput (event) {
    event.preventDefault();
    setSearchedWord(event.target.value);

}

function handleSubmit (event) {
    event.preventDefault();
    alert(`Searching for ${searchedWord}`);

}

 
return ( 
    <div>
        <form className="search-form" onSubmit={handleSubmit} > 
            <input type="search" placeholder='Type a word' onChange={handleInput}/>
            <input type="submit" value="Submit" />
        </form>
    </div>
)

}