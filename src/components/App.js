import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        let locations = [
            {
              city: "Goa",
              country: "India"
            },
            {
              city: "Amsterdam",
              country: "Netherlands"
            },
            {
              city: "New York",
              country: "USA"
            },
            {
              city: "Darjeeling",
              country: "India"
            },
            {
              city: "Tokyo",
              country: "Japan"
            },
            {
              city: "Lonavala",
              country: "India"
            }
          ];
        
          return (
            <>
            <ol>
              {locations.filter((el) => el.country === "India").map((el, index) => (
                <li key={"location" + (index + 1)}>{el.city}</li>
              ))}
                </ol>
            </>
          );
    }
}


export default App;
