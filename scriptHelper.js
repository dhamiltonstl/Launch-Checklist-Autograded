require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
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
    let empty = false;
    let invalid = false;

    const pilotValidation = validateInput(pilot);
    const copilotValidation = validateInput(copilot);
    const fuelValidation = validateInput(fuelLevel);
    const cargoValidation = validateInput(cargoLevel);

    if (pilotValidation === "Not a Number") pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    else {
        if (pilotValidation === "Empty") empty = true;
        else invalid = true;
        ready = false;
    }

    if (copilotValidation === "Not a Number") copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    else {
        if (pilotValidation === "Empty") empty = true;
        else invalid = true;
        ready = false;
    }

    if (cargoValidation === "Is a Number") {
        if (cargoLevel > 10000) {
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            ready = false;
        } else cargoStatus.innerHTML = "Cargo mass low enough for launch"
    } else {
        if (pilotValidation === "Empty") empty = true;
        else invalid = true;
        ready = false;
    }

    if (fuelValidation === "Is a Number") {
        if (fuelLevel < 10000) {
            fuelStatus.innerHTML = "Fuel level too low for launch";
            ready = false;
        } else fuelStatus.innerHTML = "Fuel level high enough for launch"
    } else {
        if (pilotValidation === "Empty") empty = true;
        else invalid = true;
        ready = false;
    }

    if (ready === true) {
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "green";
        list.style.visibility = "visible";

    } else {
        if (empty === true) {
            launchStatus.innerHTML = "Awaiting Information Before Launch";
            launchStatus.style.color = "black";
            list.style.visibility = "hidden";
            alert("All fields are required!")
        } else if (invalid === true) {
            launchStatus.innerHTML = "Awaiting Information Before Launch";
            launchStatus.style.color = "black";
            list.style.visibility = "hidden";
            alert("Make sure you enter valid information for each field!")
        } else {
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
            list.style.visibility = "visible";
        }
    }
}

async function myFetch() {
    return await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
    });
}

function pickPlanet(planets) {
    return planets[Math.floor(Math.random() * planets.length)]
} 

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;