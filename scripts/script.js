var debugMode = true;
var quotesShow = true;


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
var debugButton = document.getElementById("debugButton1")
debugButton.onclick = function() { countdownEnd() }

var countdown = document.getElementById("countdownh1")
var countdowndiv = document.getElementById("countdowndiv")
var alertSend = 0

function countdownEnd() {
    //debug
    countDownDate = new Date("Nov 24, 2021 00:00:00").getTime()
    debugButton.classList.add("hidden")

    //Website from now on only works on phone --> makes it easier for me :D
    if (screen.width > 481 && alertSend == 0) {
        alert(("Bitte benutze ab jetzt dein Handy :D"))
        HideElement(document.getElementById("body"))
        alertSend = 1
    }

    document.getElementById("Zitat").style.display = "none"
    countdown.innerHTML = 'Happy Birthday!'

    countdowndiv.classList.remove("before")
    countdowndiv.classList.add("after")

    ShowElement(document.getElementById("introdiv"))
    document.getElementById("continue1").style.display = "inline-block"

    //transition next step
    document.getElementById("continue1").onclick = function() { showMemories() }
}

function showMemories() {
    console.log("Memories")
    HideElement(document.getElementById("continue1"))
    ShowElement(document.getElementById("picdiv"))

    var rect = document.getElementById("pich2").getBoundingClientRect();
    window.scrollTo(0, rect.top)



    //Enhancing Pictures
    var picnum = 18

    var arraypics = []

    for (let i = 1; i < (picnum + 1); i++) {
        var pic = "img" + i
        arraypics[i] = document.getElementById(pic)
    }

    arraypics[1].onclick = function() { enhance(arraypics[1], arraypics, picnum) }
    arraypics[2].onclick = function() { enhance(arraypics[2], arraypics, picnum) }
    arraypics[3].onclick = function() { enhance(arraypics[3], arraypics, picnum) }
    arraypics[4].onclick = function() { enhance(arraypics[4], arraypics, picnum) }
    arraypics[5].onclick = function() { enhance(arraypics[5], arraypics, picnum) }
    arraypics[6].onclick = function() { enhance(arraypics[6], arraypics, picnum) }
    arraypics[7].onclick = function() { enhance(arraypics[7], arraypics, picnum) }
    arraypics[8].onclick = function() { enhance(arraypics[8], arraypics, picnum) }
    arraypics[9].onclick = function() { enhance(arraypics[9], arraypics, picnum) }
    arraypics[10].onclick = function() { enhance(arraypics[10], arraypics, picnum) }
    arraypics[11].onclick = function() { enhance(arraypics[11], arraypics, picnum) }
    arraypics[12].onclick = function() { enhance(arraypics[12], arraypics, picnum) }
    arraypics[13].onclick = function() { enhance(arraypics[13], arraypics, picnum) }
    arraypics[14].onclick = function() { enhance(arraypics[14], arraypics, picnum) }
    arraypics[15].onclick = function() { enhance(arraypics[15], arraypics, picnum) }
    arraypics[16].onclick = function() { enhance(arraypics[16], arraypics, picnum) }
    arraypics[17].onclick = function() { enhance(arraypics[17], arraypics, picnum) }
    arraypics[18].onclick = function() { enhance(arraypics[18], arraypics, picnum) }



}

function ShowElement(element) {
    element.classList.remove('hidden')
}

function HideElement(element) {
    element.classList.add('hidden')
}

function enhance(element, array, picnum) {


    if (element.classList.contains("enhanced")) {
        element.classList.remove("enhanced")
    } else {
        element.classList.add("enhanced")
    }

    for (let i = 1; i < (picnum + 1); i++) {

        if (array[i].classList.contains("enhanced")) {
            if (element != array[i]) {
                console.log("yes contains it")
                array[i].classList.remove("enhanced")
            }
        }
    }
}

//Debug und Quotes an/aus
var quotesElement = document.getElementById("Zitat")

if (quotesShow) {
    quotesElement.style.display = "block"
    console.log("ttrueQuote");
} else {
    console.log("falseQuote")
    quotesElement.style.display = "none"
}


var debugButton1 = document.getElementById("debugButton1")

if (debugMode) {
    debugButton1.style.display = "inline"
} else {
    debugButton1.style.display = "none"
}