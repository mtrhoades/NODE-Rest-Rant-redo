// Imports
const React = require('react');


// Stub function
function Def (html) {
    return (
        <html>
            <head>
            {/* <title>{html.title || 'Rest-Rant'}</title> */}
            <link href="/public/css/styles.css" rel="stylesheet">/link>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}


// Exports
module.exports = Def;
