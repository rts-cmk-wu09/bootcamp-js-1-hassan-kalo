const qouteHomepage = document.getElementById('qoute--homepage')
const qoutes = [
    "Qoute1",
    "Qoute2",
    "Qoute3",
    "Qoute4",
    "Qoute5",
    "Qoute6",
    "Qoute7",
    "Qoute8",
    "Qoute9",
    "Qoute10"
]

const x = Math.floor(Math.random() * 10)
qouteHomepage.innerText = qoutes[x]

