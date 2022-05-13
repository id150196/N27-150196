 // Klausur 
// Wenn eine Aufgabe nicht funktioniert, dann bitte auskommentieren: /*  */
console.log("Aufgabe 1")
// Bei der Landtagswahl ergeben sich vereinfacht folgende Prozentpunkte für die Parteien:
let prozentpunkteSPD = 47
let prozentpunkteCDU = 53
// Vergleichen Sie die Ergebnisse mit if/else.
// Geben Sie im Terminal in einem Antwortsatz an, welche Partei die Wahl gewonnen hat.
// Wenn die Werte sich ändern, muss ihr Antwortsatz sich automatisch anpassen.
// Hier Ihre Lösung:

 if(prozentpunkteCDU > prozentpunkteSPD){
    console.log ("CDU hat gewonnen.")
}else{
    console.log ( "SPD hat gewonnen.")
 }
  

console.log("Aufgabe 2")
// Bei einem großen Unternehmen stehen 900.000 € Ausgaben Einnahmen von 1.000.000 € gegenüber.
// Prüfen Sie mit if/else, ob das Unternehmen Gewinn oder Verlust gemacht hat.
// Arbeiten Sie mit Variablen, die mit den genannten Werten initialisiert werden.
// Geben Sie Ihre Lösung im Terminal aus: 

let einnahmen = 1000000
let ausgaben = 900000

if(einnahmen > ausgaben){
    console.log ("Das Unternehmen macht Gewinn.")
}else{
    console.log ( "Das Unternehmen macht Verlust.")
}



console.log("Aufgabe 3")
// In einem Handytest sollen Handys miteinander verglichen werden.
// a) Erstellen Sie die Klassendefinition mit mindestens 4 relevanten Eigenschaften:

class Handy{
    constructor(){
        this.Speicherplatz
        this.Frontkamera
        this.MobileData
        this.Preis
    }

}

// b) Instanzieren Sie zwei Objekte ("Samsung" und "Apple") der von Ihnen erstellten Klasse:
 let handyApple = new Handy
 let handySamsung = new Handy



// c) Initialisieren Sie beide Objekte mit geeigneten Eigenschaftswerten:

handyApple.Speicherplatz = "500 GB"
handyApple.Frontkamera = "18 MP"
handyApple.MobileData = "5 GB"
handyApple.Preis = "1250 $"

handySamsung.Speicherplatz = "256 GB"
handySamsung.Frontkamera = "16 MP"
handySamsung.MobileData= "4 GB"
handySamsung.Preis = "1150 $"



// d) Vergleichen Sie mit if/else eine der relevanten Eigenschaften und geben Sie
//    im Terminal aus, ob Samsung oder Apple besser ist im Hinblick auf diese Eigenschaft:

if(handyApple.Speicherplatz < handySamsung.Speicherplatz){

    console.log ("Samsung ist besser als Apple.")
}else{
    console.log ( "Apple ist besser als Samsung.")
}



console.log("Aufgabe 4")
// Änderung Sie für Ihre ganze Banking-App das Farbschema, indem Sie 
// den grünen Bereich oben und den grünen Bereich unten 
// in eine andere, ansprechende Farbe ändern, 
// so dass die weiße Schrift weiterhin gut lesbar bleibt.





console.log("Aufgabe 5")
// In Ihrer Banking-App Banking-App soll der Kunde die Kosten für einen Kredit berechnen können.
// Die Formel für die monatliche Zinsbelastung lautet: 
// Zinsen pro Monat = (Kreditbetrag x Zinssatz) ÷ (100 x 12)
// Formulieren Sie auf Papier den "Issue" und dazu 10 sinnvolle Tasks
    
    
  
  

