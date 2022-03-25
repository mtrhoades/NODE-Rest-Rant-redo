// Imports
const React = require('react') // import react
const Def = require('./default') // import default html

// Stub function
function home () {
    return (
        <Def>
            <main>
                <h1>HOME PAGE</h1>
                <div id="homeImage">
                    <img src="/images/placeImage.jpg" alt="snowy volcano"></img>
                    <p>Shoutout to Japan for this picture</p>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

// Exports
module.exports = home;