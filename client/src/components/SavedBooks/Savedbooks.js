import React from 'react'
import "./Savedbooks.css"

const Savedbooks = () => {
    let booktitle = "Book Title"
    let author = "Author"
    return (
        <div className="container border mt-5 mb-5 p-4">
            <div className="row">
                <div className="col" ><h3>Saved Books</h3></div>
            </div>
            <div className="container">
                <div className="row mt-4" >
                    <div className="col"><h4>{booktitle}</h4></div>
                    <div className="col d-flex justify-content-end">
                        <input className="btn mr-2 text-white" type="submit" value="View"></input>
                        <input className="btn ml-2 text-white" type="submit" value="Delete"></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col"><h6>{author}</h6></div>
                </div>
                <div className="row mt-4" >
                    <div className="col"><img src="https://via.placeholder.com/300" alt="..." class="img-thumbnail"/></div>
                    <div className="col">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                             magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                               Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Savedbooks
