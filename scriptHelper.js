// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {
    if (testInput === "") return "Empty";
    else if (isNaN(testInput)) return "Not a Number"
    else return "Is a Number"
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    const h2 = document.querySelector("h2");

    let ready = true;

    // console.log("FUEL STATUS: ", fuelStatus.innerHTML)

    if (validateInput(pilot) === "Not a Number") pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    else alert("Invalid Pilot Name");

    if (validateInput(copilot) === "Not a Number") copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    else alert("Invalid Copilot Name");

    // console.log("CARGO VALIDATION: ", validateInput(cargoLevel))
    if (validateInput(cargoLevel) === "Is a Number") {
        if (cargoLevel > 10000) {
            // console.log("CARGO TOO HEAVY", cargoLevel)
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            ready = false;
        } else cargoStatus.innerHTML = "Cargo mass low enough for launch"
    } else alert("Invalid Cargo Level")

    // console.log("FUEL VALIDATION: ", validateInput(fuelLevel))
    if (validateInput(fuelLevel) === "Is a Number") {
        if (fuelLevel < 10000) {
            // console.log("FUEL TOO LOW", fuelLevel)
            fuelStatus.innerHTML = "Fuel level too low for launch";
            ready = false;
        } else fuelStatus.innerHTML = "Fuel level high enough for launch"
    } else alert("Invalid Fuel Level");

    // console.log("READY: ", ready)
    if (ready === true) {
        h2.innerHTML = "Shuttle is Ready for Launch";
        h2.style.color = "green";
    } else {
        h2.innerHTML = "Shuttle Not Ready for Launch";
        h2.style.color = "red";
        list.style.visibility = "visible";
    }
    // console.log("END", list.style.visiblity)
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;