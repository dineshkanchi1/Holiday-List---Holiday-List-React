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
            {
            let indian=locations.filter((el) => el.country==="India");
            indian.map((el,index)=>(<h1 key={index+1}>{el.city}</h1>));
            let others=locations.filter((el) => el.country!=="India");
            others.map((el,index)=>(<h1 key={indian.length+index+1}>{el.city}</h1>))
            }
	    </>
        )
    }
}


export default App;
