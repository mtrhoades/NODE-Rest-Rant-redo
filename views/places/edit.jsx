// Imports
const React = require('react'); // react import
const Def = require('../default'); // default html import


// Stub Function
function edit (data) {
    return (
        <Def>
            <main>
                <h1>Edit a place page!</h1>
                <form method="POST" action={`/places/${data.index}?_method=PUT`}>
                <div className="row">
                    <div className="form-group col-sm-6 col-md-4 col-lg-3">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" id="name" name="name" value={data.name} />
                    </div>
                    <div className="form-group col-sm-6 col-md-4 col-lg-3">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" id="pic" name="pic" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-sm-6 col-md-4 col-lg-3">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city" />
                    </div>
                    <div className="form-group col-sm-6 col-md-4 col-lg-3">
                        <label htmlFor="state">State</label>
                        <input className="form-control" id="state" name="state" />
                    </div>
                </div>
                <div className="form-group col-sm-6 col-md-4 col-lg-3">
                    <label htmlFor="cuisines">Cuisines</label>
                    <input className="form-control" id="cuisines" name="cuisines" />
                </div>
                <div className="form-group col-sm-6 col-md-4 col-lg-3">
                    <label for="founded">Founded Year</label>
                    <input className="form-control" id="founded" name="founded" value={data.place.founded} />
                </div>
                <input className="btn btn-primary" type="submit" value="Submit" />
                </form>
            </main>
        </Def>
    )
}


// Exports
module.exports = edit;