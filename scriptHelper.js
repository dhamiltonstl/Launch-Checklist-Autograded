// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    const missionTarget = document.getElementById("missionTarget");

    missionTarget.innerHTML = `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src=${imageUrl}>
    `
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
    const launchStatus = document.getElementById("launchStatus");

    let ready = true;

    if (validateInput(pilot) === "Not a Number") pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    else alert("Invalid Pilot Name");

    if (validateInput(copilot) === "Not a Number") copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    else alert("Invalid Copilot Name");

    if (validateInput(cargoLevel) === "Is a Number") {
        if (cargoLevel > 10000) {
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            ready = false;
        } else cargoStatus.innerHTML = "Cargo mass low enough for launch"
    } else alert("Invalid Cargo Level")

    if (validateInput(fuelLevel) === "Is a Number") {
        if (fuelLevel < 10000) {
            fuelStatus.innerHTML = "Fuel level too low for launch";
            ready = false;
        } else fuelStatus.innerHTML = "Fuel level high enough for launch"
    } else alert("Invalid Fuel Level");

    if (ready === true) {
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "green";
    } else {
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
    }
    list.style.visibility = "visible";
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    return planets[Math.floor(Math.random()*planets.length)]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;