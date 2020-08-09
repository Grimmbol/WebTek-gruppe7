let navnInput = document.getElementById("navnInput")
let meldingInput = document.getElementById("meldingInput")
let emailInput = document.getElementById("emailInput")
let telefonInput = document.getElementById("telefonInput")

let indexNavnInput = document.getElementById("indexNavnInput")
let indexMeldingInput = document.getElementById("indexMeldingInput")

function klikketHovedside() {
    alert("Melding sendt")
    indexNavnInput.value = ""
    indexMeldingInput.value = ""
    return false
}

function klikketBliMed() {
    alert("Din søknad er sendt. Takk for din søknad")
    navnInput.value = ""
    meldingInput.value = ""
    emailInput.value = ""
    telefonInput.value = ""
    return false
}