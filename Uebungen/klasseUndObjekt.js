console.log("Übungen zu Klasse und objekt")
console.log ("============================")


// Übungen zu Klasse und Objekt

// Übung 1
// In einem Fußballverein sollen Spieler verwaltet werden. 
// a) Identifizieren Sie das Objekt der realen Welt mit seinen relevanten Eigenschaften
// b) Erstellen Sie die Klassendefinition
// c) Instanzieren Sie ein Objekt der Klasse
// d) Initialisieren Sie das Objekt mit Eigenschaftswerten

// zu a) das Objekt der realen Welt ist der Spieler

class Spieler {
    // zu b)
    constructor(){
        this.Name
        this.Position
        this.Verein
        this.Nummer
    
    }
}

// zu c)
// Es wird nun ein konkreter Spieler mit konkreten Eigenschaftswerten erzeugt.
// Dazu wird der konkrete Spieler deklariert (=bekanntgemacht): let spielerMueller
// In einem zweiten Schritt wird der konkrete spieler instanziniert = new Spieler()
let spielerMueller = new Spieler ()

// zu d)
// Es werden konkrete Eigenschaftswerte in den Arbeitsspeicher geschrieben:
spielerMueller.Name = "Thomas Müller"
spielerMueller.Nummer = 25
spielerMueller.Position = "Strümer"
spielerMueller.Verein = "FCB"
spielerMueller.Alter = 18

if(spielerMueller.Alter >= 18){
    spielerMueller.Volljaehrig = true 
    console.log("Der Spiler " + spielerMueller.Name + " ist volljährig.")
}


console.log(spielerMueller.Name)
console.log(spielerMueller.Position)
console.log("Der Spieler " + spielerMueller.Name + " hat die Nummer " + spielerMueller.Nummer + ".")




// Übung 2
// In einem Schulverwaltungsprogramm sollen Zeugnisse verwaltet werden. 
// a) Identifizieren Sie das Objekt der realen Welt mit seinen relevanten Eigenschaften
// b) Erstellen Sie die Klassendefinition
// c) Instanzieren Sie ein Objekt der Klasse
// d) Initialisieren Sie das Objekt mit Eigenschaftswerten

// zu a) Das "Zeugnis" ist das Objekt der realen Welt

// zu b)
class Zeugnis{
    constructor(){
        this.Gesamtnote
        this.Fehlstunden
        this.SchuelerName
        this.Faecher
        this.Klasse
        this.Geburtsdatum
    }
}

// zu c)
let zeugnisPit = new Zeugnis()
let zeugnisMax = new Zeugnis ()

// zu d)
zeugnisPit.SchuelerName = "Pit Kiff"
zeugnisPit.Fehlstunden = 100
zeugnisPit.Gesamtnote = 1


zeugnisMax.SchuelerName = "Max Muster"
zeugnisMax.Fehlstunden = 10
zeugnisMax.Gesamtnote = 2

if(zeugnisMax.Fehlstunden > zeugnisPit.Fehlstunden){
    console.log ("Max Muster hat mehr Fehlstunden")
    }else{
        console.log(" Pit Kiff hat mehr Fehlstunden")
}




// Übung 3
// In einem Kiosk soll das Sortiment mit verwaltet werden. 
// a) Identifizieren Sie das Objekt der realen Welt mit seinen relevanten Eigenschaften
// b) Erstellen Sie die Klassendefinition
// c) Instanzieren Sie ein Objekt der Klasse
// d) Initialisieren Sie das Objekt mit Eigenschaftswerten

// zu a) Die Objekte der realen Welt sind die Produkte

// zu b)
class Produkt{
    constructor (){
        this.BruttoPreis
        this.Bezeichnung
        this.MwStSatz
        this.Barcode
    }
}

// zu c) 
// Deklaration und Instanziierung
let produkt1 = new Produkt ()

// zu d)
produkt1.Bezeichnung = "Kaugummi"
produkt1.Barcode = 5901234123457
produkt1.BruttoPreis = 1.19 // Im Quellcode steht anstelle des Kommas ein Punkt
produkt1.MwStSatz = 19 // Prozent

console.log ("das Produkt " + produkt1.Bezeichnung + " hat den Bruttopreis " + produkt1.BruttoPreis)

produkt1.Nettopreis= produkt1.BruttoPreis / (100 + produkt1.MwStSatz) * 100

console.log ("Nettopreis: "+ produkt1.Nettopreis )

if(produkt1.BruttoPreis > 1){
    console.log ( "Achtung! Preis von " + produkt1.Bezeichnung + " muss gesenkt werden!" )
    }else{
        console.log (" Preis von"  + produkt1.Bezeichnung + " ist ok")
}





// Übung 4
// Für ein Schulfest sollen alle Stände verwaltet werden. 
// a) Identifizieren Sie das Objekt der realen Welt mit seinen relevanten Eigenschaften
// b) Erstellen Sie die Klassendefinition
// c) Instanzieren Sie ein Objekt der Klasse
// d) Initialisieren Sie das Objekt mit Eigenschaftswerten

// zu a) Der Stand sind das Objekte der realen Welt

// zu b) 
 class Stand{
     constructor(){
         this.Größe
         this.Dekoration
         this.Personalanzahl

     }
 }

 // zu c)
 let stand1 = new Stand ()
 let stand2 = new Stand ()

 // zu d) 
stand1.Personalanzahl = 5
stand2.Personalanzahl = 8

if(stand1 < stand2){
    console.log (" Die Anzahl von Personal am ersten Stand ist kleiner als am zweiten Stand")
    }else{
        console.log (" Die Anzahl von Personal am zweiten Stand ist kleiner als am ersten Stand")
}