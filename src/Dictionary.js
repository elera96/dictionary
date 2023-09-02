import React, { useState } from "react";
import axios from "axios";
import Meaning from "./Meaning.js";
import "./Dictionary.css";


export default function Dictionary () {

const [searchedWord, setSearchedWord] = useState(" ");
const [meaning, setMeaning] = useState(null);
const [keyword, setKeyword] = useState("");

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
setMeaning(response.data[0].meanings);
setKeyword(response.data[0].word);

}


 
return ( 
    <div className="search-engine">
        <form className="search-form" onSubmit={handleSubmit} > 
            <input type="search" placeholder='Type a word' className="sr-only" onChange={handleInput}/>
            <input type="submit" value="Submit" className="btn btn-info" />
            <h1>{keyword}</h1>
            <Meaning meaning={meaning} />
        </form>
    </div>
)

}