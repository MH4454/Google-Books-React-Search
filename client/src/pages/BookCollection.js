import React from 'react'
import Nav from "../components/Navbar/Navbar"
import Header from "../components/Header/Header"
import SavedBooks from "../components/SavedBooks/Savedbooks"

const BookCollection = () => {
    return (
        <div>
            <Nav/>
            <Header/>
            <SavedBooks/>
        </div>
    )
}

export default BookCollection
