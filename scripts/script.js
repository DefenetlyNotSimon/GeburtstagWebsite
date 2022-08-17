//Datum zu dem gezählt wird
var countDownDate = new Date("Nov 24, 2022 00:00:00").getTime();
console.log(countDownDate)

//Jede Sekunde updaten
var x = setInterval(function() {

    //Datum und Zeit von heute
    var now = new Date().getTime();
    console.log(now);

    //Entfernung der Daten
    var distance = countDownDate - now;
    console.log(distance);

    //Berechnung für Tage, Stunden, Minuten, Sekunden
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //Anzeigen des Ergebnis
    document.getElementById("countdownh1").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;

    //Text bei ablaufen
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdownh1").innerHTML = "ABGELAUFEN";
    }

}, 1000)