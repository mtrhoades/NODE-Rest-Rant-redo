// Imports
const React = require('react'); // react import
const Def = require('./default'); // default html import

// Stub Function
function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND!</h1>
                <p>Oops! We can NOT find this page</p>
                <img src="/images/dog404.png" alt="dog404"></img>
            </main>
        </Def>
    )
}


// Exports
module.exports = error404;