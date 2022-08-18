const getJSON = async (url) => {
	const response = await fetch(url)
	const data = await response.json()
	return data
}

const data = await getJSON("../data/quotes.json")
const quotes = data.quotes

console.log(quotes)

//Datum zu dem gezählt wird
var countDownDate = new Date("Nov 24, 2022 00:00:00").getTime()
console.log("cdDate " + countDownDate)

//Jede Sekunde updaten
var x = setInterval(function () {
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
	}

	function leadingZero(value) {
		if (value < 10) {
			var value2 = "0" + String(value)
			return value2
		} else {
			return value
		}
	}
}, 1000)
