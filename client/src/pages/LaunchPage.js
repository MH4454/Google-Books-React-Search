import React from 'react'
import Nav from "../components/Navbar/Navbar"
import Header from "../components/Header/Header"
import SearchBar from "../components/SearchBar/Searchbar"
import Results from "../components/Results/Results"

const LaunchPage = () => {
    return (
        <div>
            <Nav/>
            <Header/>
            <SearchBar/>
            <Results/>
        </div>
    )
}

export default LaunchPage
