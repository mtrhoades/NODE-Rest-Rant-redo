// Imports
const React = require('react'); // react import
const Def = require('../default'); // default html import


// Stub Function
function show (data) {
    return (
        <Def>
            <br></br>
            <main>
                <h1>{ data.place.name }</h1>
                <br></br>
                <div className="rating">
                    <h2>Rating</h2>
                    currently unrated...
                </div>
                <br></br>
                <div className="images">
                    <img src={data.place.pic} alt={data.place.name}></img>
                </div>
                <div className="description">
                <br></br>
                    <h3>Located in {data.place.city}, {data.place.state}</h3>
                    Founded in year {data.place.founded}
                    <br></br>
                    <h3>{data.place.showEstablished()}</h3>
                    <br></br>
                    <h4>Serving {data.place.cuisines}</h4>
                </div>
                <br></br>
                <div className="comments">
                    <h2>Comments</h2>
                    No comments yet!
                </div>
                <br></br>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                    Edit
                </a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <br></br>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
                <br></br>
            </main>
        </Def>
    )
}


// Exports
module.exports = show;