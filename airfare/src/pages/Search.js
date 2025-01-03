import Navbar from "../elements/Navbar";

function scrape() {
    console.log(`test`)
}

function Search() {
    return (
        <div>
            <title>CheapFares - Search</title>
            <Navbar />
            <p>From Search</p>
            <button onClick={scrape}>Search</button>
        </div>
    )
}

export default Search;