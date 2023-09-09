import React, { useState } from "react";
import axios from "axios";
import Meaning from "./Meaning.js";
import "./Dictionary.css";
import Phonetics from "./Phonetics";


export default function Dictionary (props) {

const [searchedWord, setSearchedWord] = useState(props.defaultKeyword);
const [meaning, setMeaning] = useState(null);
const [keyword, setKeyword] = useState("");
const [phonetics, setPhonetics] = useState(null);
const [loaded, SetLoaded] = useState(false);

function handleInput (event) {
    event.preventDefault();
    setSearchedWord(event.target.value);

}

function load ()
{
    SetLoaded(true);
    search (searchedWord);
}
function search () {

    // documention on https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`
    axios.get(apiUrl).then(handleResponse);
    
}

function handleSubmit (event) {
    event.preventDefault();
    search();

}

function handleResponse (response) {
setMeaning(response.data[0].meanings);
setKeyword(response.data[0].word);
setPhonetics(response.data[0].phonetics);

}


if (loaded) {
 
return ( 
    <div className="search-engine">
        <form className="search-form" onSubmit={handleSubmit} > 
            <input type="search" placeholder='Type a word' className="search-bar" onChange={handleInput}/>
            <input type="submit" value="Submit" className="btn submit" />
            <section className="basic-information"><h1 className="keyword">{keyword}</h1>
            <Phonetics phonetics={phonetics} />
            </section>
            <Meaning meaning={meaning} />
        </form>
    </div>
)
}
else {
    load();
}

}