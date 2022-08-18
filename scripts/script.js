//Getting the JSON File --> Implementation below Countdown
const getJSON = async(url) => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}


const data = await getJSON("../data/quotes.json")
console.log(data);
const quotes = data.Quotes

console.log(quotes)
    //Credit to User Zockedidock for helping with JSON implementation

//Countdown
var intervall = 1000
    //Datum zu dem gezählt wird
var countDownDate = new Date("Nov 24, 2022 00:00:00").getTime()
console.log("cdDate " + countDownDate)

//Jede Sekunde updaten

var x = setInterval(function() {
    //Datum und Zeit von heute
    var now = new Date().getTime()
    console.log("now " + now)

    //Entfernung der Daten
    var distance = countDownDate - now
    console.log("distance: " + distance)

    //Berechnung für Tage, Stunden, Minuten, Sekunden
    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)

    //adding leaing zeroes
    days = leadingZero(days)
    hours = leadingZero(hours)
    minutes = leadingZero(minutes)
    seconds = leadingZero(seconds)

    //Anzeigen des Ergebnis
    document.getElementById("countdownh1").innerHTML =
        days + ":" + hours + ":" + minutes + ":" + seconds

    //Text bei ablaufen
    if (distance < 0) {
        clearInterval(x)
        document.getElementById("countdownh1").innerHTML = "ABGELAUFEN"
        countdownEnd();
    }
    console.log("Screen Width:" + screen.width)


}, intervall)

function leadingZero(value) {
    if (value < 10) {
        var value2 = "0" + String(value)
        return value2
    } else {
        return value
    }
}

//Quote implementation
var length = quotes.length
console.log('Array length' + length)
randomQuote()

var x = setInterval(function() {
    randomQuote()
}, 20000)

function randomQuote() {
    var randomNum = Math.floor(Math.random() * (length - 1)) + 1
    console.log('random Array: ' + randomNum)

    document.getElementById("Zitat").innerHTML = ('"' + quotes[randomNum] + '"')
}

//Upon Countdown completion
//debug
var debugButton = document.getElementById("debugButton")
debugButton.onclick = function() { countdownEnd() }

var countdown = document.getElementById("countdownh1")
var countdowndiv = document.getElementById("countdowndiv")
var alertSend = 0

function countdownEnd() {
    //debug
    countDownDate = new Date("Nov 24, 2021 00:00:00").getTime()


    if (screen.width > 481 && alertSend == 0) {
        alert(("Bitte benutze ab jetzt dein Handy :D"))
        document.getElementById("body").style.display = "none"
        alertSend = 1
    }

    document.getElementById("Zitat").style.display = "none"

    countdown.innerHTML = 'Happy Birthday!'


    countdowndiv.classList.remove("before")
    countdowndiv.classList.add("after")

}