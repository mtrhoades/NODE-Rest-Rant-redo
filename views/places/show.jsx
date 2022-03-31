// Imports
const React = require('react'); // react import
const Def = require('../default'); // default html import


// Stub Function
function show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
          Not yet rated
        </h3>
      )
      if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
          return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ""
        for(let i = 0; i < averageRating; i++) {
            stars += "⭐"
        }
        rating = (
          <h3>
             { stars } stars
          </h3>
        )
          comments = data.place.comments.map(c => {
            return (
              <div className="border">
                <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
                <h4>{c.content}</h4>
                <h3>
                  <stong>- {c.author}</stong>
                </h3>
                <h4>Rating: {c.stars}</h4>
                <form method="POST" action = {`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
                    <input type="submit" className='btn btn-danger' value="Delete Comment"></input>
                </form>
              </div>
            )
          })
        }
    return (
        <Def>
            <br></br>
            <main>
                <h1>{ data.place.name }</h1>
                <br></br>
                <div className="rating">
                    <h2>{ rating }</h2>
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
                    { comments }
                </div>
                <form method='POST' action={`/places/${data.place.id}/comment/`}>

                <div className='form-group'>
                    <label htmlFor='author'>Author</label>
                    <input className='form-control' id='author' name='author'/>
                </div>

                <div className='form-group'>
                    <label htmlFor='content'>Content</label>
                    <input className='form-control' id='content' name='content' type='textarea' />
                </div>

                <div className='form-group'>
                    <label htmlFor='stars' class="form-label">Star Rating</label>
                    <input className='form-control' class="rating" id='stars' name='stars' type='range' step='0.5' min='0' max='5' />
                </div>

                <div className='form-group'>
                    <label htmlFor='rant'>Rant</label>
                    <input  id='rant' name='rant' type='checkbox' defaultChecked/>
                </div>

                <input className='btn btn-primary' type='submit' value='Add Comment' />
                </form>

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