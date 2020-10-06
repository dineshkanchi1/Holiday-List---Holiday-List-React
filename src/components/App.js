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
        
          let indiaCities = locations.filter((el) => el.country === "India");
          return (
            <>
              {indiaCities.map((el, index) => (
                <h1 key={"location" + (index + 1)}>{el.city}</h1>
              ))}
              {/* {locations
                .filter((el) => el.country !== "India")
                .map((el, index) => (
                  <h1 key={"location" + (indiaCities.length + index + 1)}>{el.city}</h1>
                ))} */}
            </>
          );
    }
}


export default App;
