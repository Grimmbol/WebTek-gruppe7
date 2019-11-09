let navnInput = document.getElementById("navnInput")
let meldingInput = document.getElementById("meldingInput")
let emailInput = document.getElementById("emailInput")
let telefonInput = document.getElementById("telefonInput")

let hovedsideNavnInput = document.getElementById("hovedsideNavnInput")
let hovedsideMeldingInput = document.getElementById("hovedsideMeldingInput")

function klikketHovedside() {
    alert("Melding sendt")
    hovedsideNavnInput.value = ""
    hovedsideMeldingInput.value = ""
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