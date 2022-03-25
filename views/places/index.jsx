// Imports
const React = require('react'); // react import
const Def = require('../default'); // default html import


// Stub Function
function index (data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name}></img>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>Places Index Page</h1>
                {placesFormatted}
            </main>
        </Def>
    )
}


// Exports
module.exports = index; 