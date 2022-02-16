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

// zu a) Das Sortiment ist das Objekt der realen Welt

// zu b)
class Sortiment{
    constructor (){
        this.Snacks
        this.Getränke
        this.Zigaretten
        this.Zeitschriften
    }
}

// zu c) 
let sortimentAnzahl = new Sortiment ()

// zu d)
sortimentAnzahl.Snacks = 250
sortimentAnzahl.Getränke = 150

if( sortimentAnzahl.Snacks > sortimentAnzahl.Getränke){
    console.log ("Der Bestand an Snacks ist größer als der Bestand an Getränke")
     }else{
         console.log ( "Der Bestand an Snacks ist nicht größer als der Bestand an Getränke ")
}






// Übung 4
// Für ein Schulfest sollen alle Stände verwaltet werden. 
// a) Identifizieren Sie das Objekt der realen Welt mit seinen relevanten Eigenschaften
// b) Erstellen Sie die Klassendefinition
// c) Instanzieren Sie ein Objekt der Klasse
// d) Initialisieren Sie das Objekt mit Eigenschaftswerten

// zu a) Die Stände sind die Objekte der realen Welt

// zu b) 
 class Stand{
     constructor(){
         this.Größe
     }
 }

 // zu c)
 let stand1 = new Stand ()
 let stand2 = new Stand ()

 // zu d) 
stand1.Größe = "5m"
stand2.Größe = "3m"

if(stand1 < stand2){
    console.log (" Der erste Stand ist kleiner als zweiter Stand")
    }else{
        console.log (" Der erste Stand ist nicht kleiner als zweiter Stand")
}