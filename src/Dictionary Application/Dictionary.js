import React, { useState } from "react";
import axios from "axios";
import Meaning from "./Meaning.js";
import "./Dictionary.css";
import Phonetics from "./Phonetics";
import Photos from "./Photos";


export default function Dictionary (props) {

const [searchedWord, setSearchedWord] = useState(props.defaultKeyword);
const [meaning, setMeaning] = useState(null);
const [keyword, setKeyword] = useState("");
const [phonetics, setPhonetics] = useState(null);
const [photos, setPhotos] = useState(null);
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

    //documentation on https://www.pexels.com/api/documentation/?language=javascript#photos-curated
    let imagesApiKey = '68c9ef64a34aca6bcd501b08f5caotf8';
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${searchedWord}&key=${imagesApiKey}`;
    axios.get(imageApiUrl,).then(handlePexelsResponse)

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


function handlePexelsResponse (response) {
    setPhotos(response.data.photos);
}


if (loaded) {
 
return ( 
    <div className="search-engine">
        <form className="search-form" onSubmit={handleSubmit} > 
            <input type="search" placeholder='Type a word' className="search-bar" onChange={handleInput}/>
            <input type="submit" value="Submit" className="submit" />
            <section className="basic-information"><h1 className="keyword">{keyword}</h1>
            <Phonetics phonetics={phonetics} />
            </section>
            <Meaning meaning={meaning} />
            <section className="basic-information">
            <h2 className="headline-section">Images 📷</h2>
            <Photos photos={photos} />
            </section>
        </form>
    </div>
)
}
else {
    load();
}

}