function updatePlanetStatus() {
    let planet = document.getElementById("greenplanet");
    planet.innerHTML = "<em>Red Alert:</em> hit by phaser fire!";
}

window.onload = updatePlanetStatus;
