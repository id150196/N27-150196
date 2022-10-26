console.log("******** K L A U S U R 26.10.2022 ********")

// Aufgabe 1
// Grenzen Sie Datenschutz und Datensicherheit gegeneinader ab!
// 
// Beim Datenschutz geht es um Schutz von Daten vor Veränderung, Verfälschung und Missbrauch. 
// Es bezieht sich auf personenbezigenen Daten wie Telefonnummer, Adresse usw.
//
//
// Bei der Datensicherheit geht es um den Schutz von den Daten, die beispielweise verloren gehen. Sie werden durch Verschlüsselung
// von Manipulationen geschutzt.
//
//
//
//
// 
// Aufgabe 2 a)
//
// Grenzen Sie symmetrische und asymmetrische Verschlüsselung gegeneinander ab! 
// Nennen Sie jeweils Vorteile! 
// Gehen Sie auch auf die Eigenschaften und Unterschiede von public key und private key ein!
// 
// symmetrische Verschlüsselung: 
// Es wird ein Schlüssel verwendet, der dem Empfänger über einen sicheren Kanal ( wie z.B. Telefon) übergeben werden soll.
// Die Datei ist nur dann zu öfnnen, wenn man den Schlüssel hat. 
// Vorteil:
// Die Verschlüsselung geht relativ schnell, da beide Personnen nur einen Schlüssel brauchen
//
// assymetrische Verschlüsselung:
// Die Dateien werden durch zwei Schlüssel verschlüsselt. 
// Die Datei wird durch public key verschlüsselt und durch den private key entschlüsselt. 
// Der public key ist für alle zu sehen und der private key ist an eine bestimmte Person gerichtet.
// Vorteil:
// 
//
// Aufgabe 2 b)
// Wie könnte eine Verschlüsselung aussehen, die die Vorteile symmetrischer und asymmetrischer
// Verschlüsselung miteinander verbindet?
// 
// Hybride Verschlüsselung es gibt bestimmte Apps
// 
// 
// 
//
//
//
//
// Aufgabe 3)
// Grenzen Sie Deklaration, Instanziierung und Initialisierung voeinander ab!  
// 
// Bei der Deklaration wird ein "class" erstellt, dem die Eingeschaften zugewiesen werden.
//
//
//
//
//  
// 
//
//
//
//
//
//
// Aufgabe 5a)
// Sie werden beauftragt ein Programm zu entwicklen, dass alle Zeugnisse einer Schule digital verwaltet.  
// Entwerfen Sie eine Klasse mit relevanten Eigenschaften!
    class Zeugnis{ //instazierung
        constructor() {
            this.SchuelerVorname
            this.SchuelerNachname
            this.Geburtsdatum
            this.Geburtsort
            this.Notendurchschnitt
            this.Fehlstunden
            this.AnzahlderFaecher
            this.Anmerkung


        }
    }


// Aufgabe 5b)
// Führen Sie Deklaration, Instanzzierung und Initialisierung für das Halbjahreszeugnis 
// des Schüler Pit Kiff durch. 
// Vergeben Sie realistische Eigenschaftswerte.  
// 

 let zeugnis = new Zeugnis () //deklarierung 

 zeugnis.SchuelerVorname = "Pit"
 zeugnis.SchuelerNachname = "Kiff"
 zeugnis.Geburtsdatum = "18.07.2000"
 zeugnis.Geburtsort = "Berlin"
 zeugnis.Notendurchschnitt = 10
 zeugnis.AnzahlderFaecher = 12
 zeugnis.Fehlstunden = 36
 zeugnis.Anmerkung = "gut"

// Aufgabe 5c)
// Geben Sie die Eigenschaftswerte aus 5b auf der Konsole wie folgt aus: Je Eigenschaft soll
// in jeweils einer Zeile die Eigenschaft und der zugehörige Wert angezeigt werden.
// Beispiel für:
// Schuhgröße: 40
// Haarfarbe: braun 

 console.log("Vorname: Pit")
 console.log("Nachname: Kiff")
 console.log("Geburtsdatum: 18.07.2000 ")
 console.log("Geburtsort: Berlin")
 console.log("Notendurchschnitt: 10")
 console.log("AnzahlderFaecher: 12")
 console.log("Fehlstunden: 36")
 console.log("Anmerkung: gut")




// Aufgabe 6)
// Zwei Schüler haben bekommen Zeugnisse: 
// Pit: Punkte (Mathe: 15, Deutsch: 10, Englisch:  5) 
// Git: Punkte (Mathe: 10, Deutsch:  8, Englisch: 15) 
//
// Initialisieren Sie Variablen für alle genannten Eigenschaftswerte. 
// Programmieren Sie folgende Logik:
// * Wenn die Durchschnittspunktzahl von Pit größer ist, soll auf der Konsole stehen: 
//     "Pit hat das bessere Zeugnis" 
// * Wenn die Durchschnittspunktzahl von Git größer ist, soll auf der Konsole stehen: 
//     "Git hat das bessere Zeugnis"
// Wenn die Durchschnittspunktzahl gleich ist, dann soll auf der Konsole stehen: 
//     "Pit gleich Git" 
// Wenn die Durchschnittspunktzahl bei einem doppelt so groß oder größer ist, dann soll auf der Konsole stehen: 
//     "Git hat das viel bessere Zeugnis" bzw.
//     "Pit hat das viel bessere Zeugnis"

class Schueler {
    constructor(){
        this.Deutsch
        this.Mathe
        this.Englisch
    }
}
 let schuelerPit = new Schueler ()
 
    schuelerPit.Deutsch = 10
    schuelerPit.Mathe = 15
    schuelerPit.Englisch = 5

let schuelerGit = new Schueler ()
    schuelerGit.Deutsch = 8
    schuelerGit.Mathe = 10
    schuelerGit.Englisch = 15
 

    if (schuelerPit.Deutsch + schuelerPit.Englisch + schuelerPit.Mathe > schuelerGit.Deutsch + schuelerGit.Englisch + schuelerGit.Mathe){

        console.log("Pit hat das bessere Zeugnis")

        }else{
        console.log("Git hat das bessere Zeugniss")
     }
          
     if (schuelerPit.Deutsch + schuelerPit.Englisch + schuelerPit.Mathe == schuelerGit.Deutsch + schuelerGit.Englisch + schuelerGit.Mathe){

        console.log("Pit gleich Git")
    }else{
        console.log("Pit nicht gleich Git")
     }