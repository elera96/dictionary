import React, { useState } from "react";
import axios from "axios";


export default function Dictionary () {

const [searchedWord, setSearchedWord] = useState(" ");

function handleInput (event) {
    event.preventDefault();
    setSearchedWord(event.target.value);

}

function handleSubmit (event) {
    event.preventDefault();

    // documention on https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`
    axios.get(apiUrl).then(handleResponse);
}

function handleResponse (response) {
console.log(response.data);
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