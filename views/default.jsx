// Imports
const React = require('react');


// Stub function
function Def (html) {
    return (
        <html>
            <head>
            <title>{html.title || 'Rest-Rant'}</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
            <link href="/css/styles.css" rel="stylesheet"></link>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}


// Exports
module.exports = Def;
