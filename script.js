// Write your JavaScript code here!


window.addEventListener("load", function() {
    
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let randomPlanet = pickPlanet(listedPlanets)
        console.log(randomPlanet);
        addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image)
    })
    
    const list = document.getElementById("faultyItems")
    const pilotInput = document.querySelector("input[name=pilotName");
    const copilotInput = document.querySelector("input[name=copilotName");
    const fuelInput = document.querySelector("input[name=fuelLevel");
    const cargoInput = document.querySelector("input[name=cargoMass");
    const formSubmit = document.getElementById("formSubmit")

    formSubmit.addEventListener("click", e => {
        e.preventDefault()
        console.log(pilotInput.value, copilotInput.value, fuelInput.value, cargoInput.value)
        formSubmission(document, list, pilotInput.value, copilotInput.value, fuelInput.value, cargoInput.value)
    })

 });