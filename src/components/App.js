import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        const locations = [
            {
                city:"Goa",
                country:"India"
            },
            {
                city:"Amsterdam",
                country:"Netherlands"
            },
            {
                city:"New York",
                country:"USA"
            },
            {
                city:"Darjeeling",
                country:"India"
            },
            {
                city:"Tokyo",
                country:"Japan"
            },
            {
                city:"Lonavala",
                country:"India"
            },
        ]
        return(
           <>
            {locations.filter((el) => el.country==="India").map((el)=>(<h1 key={el.city}>{el.city}</h1>))}
	    </>
        )
    }
}


export default App;
