import React from 'react'
import "./Searchbar.css"

const Searchbar = () => {
    return (
        <>
    <div className="container">
        <div className="row">
            <div className="col"><h3>Book Search</h3></div>
        </div>
        <div className="row mt-4">
            <div className="col">Book:</div>
        </div>
        <div className="row">
            <div className="col">
            <input className="form-control" type="text" placeholder="Default input"></input>
            </div>
        </div>
        <div className="row mt-4">
            <div className="col d-flex justify-content-end"><input className="btn text-white" type="submit" value="Submit"></input></div>
        </div>
    </div>
        </>
    )
}

export default Searchbar
