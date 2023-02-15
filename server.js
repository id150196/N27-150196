var mysql = require('mysql');

var IBAN = require('iban')

var dbVerbindung = mysql.createConnection({
    host: '10.40.38.110',
    user: 'placematman',
    password: "BKB123456!",
    database: "dbn27"
  });
  
  dbVerbindung.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

// Die Tabelle namens kunde wird erstellt 
// Die Spalten heißen: idKunde, vorname, nachname, ort, kennwort, mail
// VARCHAR (45) legt den Datentyp der Spalte auf "Text" mit der Länge max. 45 Zeichen fest
// INT (11) : begrenzt die Eingabe auf 11 Ziffern. Es sind nur Ganzzahlen möglich
// Float/ Double: sind Gleitkommazahlen 
// Smallint: Zahlen von 0 - 65535
// Date/ Datetime: steht für ein Datum bzw. Uhrzeit
// idKunde ist Primary Key. Das bedeutet, dass die idKunde den Datensatz eindeutig 
// kennzeichnet. Das wiederum bedeutet, dass kein zweiter Kunde mit derselben idKunde angelegt

dbVerbindung.connect(function(fehler){
    dbVerbindung.query('CREATE TABLE kunde(idKunde INT(11), vorname VARCHAR(45), nachname VARCHAR(45), ort VARCHAR(45), kennwort VARCHAR(45), mail VARCHAR(45), PRIMARY KEY(idKunde));', function (fehler) {
    
        if (fehler) {
            if(fehler.code == "ER_TABLE_EXISTS_ERROR"){
            console.log("Tabelle kunde existiert bereits und wird nicht angelegt.")
        
            }else{
                console.log("Fehler: " + fehler )
            }
        }else{
            console.log("Tabelle Kunde erfolgreich angelegt.")
        }
    })
})

    dbVerbindung.connect(function(fehler){
        dbVerbindung.query('CREATE TABLE kredit(idKunde INT(11), datum DATETIME, zinssatz FLOAT, laufzeit INT(11), betrag SMALLINT, PRIMARY KEY(idKunde, datum));', function (fehler) {
        
            if (fehler) {
        if(fehler.code == "ER_TABLE_EXISTS_ERROR"){
        console.log("Tabelle kredit existiert bereits und wird nicht angelegt.")
            
            }else{
        console.log("Fehler: " + fehler )
        }
            }else{
        console.log("Tabelle erfolgreich angelegt.")
        }
        })
        })

        // Eine Tabelle namens konto wird neu angelegt

    dbVerbindung.connect(function(fehler){
            dbVerbindung.query('CREATE TABLE konto(iban VARCHAR(45), idKunde INT(11), anfangssaldo FLOAT, kontoart VARCHAR(45), timestamp TIMESTAMP,PRIMARY KEY(iban));', function (fehler) {
            
                if (fehler) {
            if(fehler.code == "ER_TABLE_EXISTS_ERROR"){
            console.log("Tabelle kredit existiert bereits und wird nicht angelegt.")
                
                }else{
            console.log("Fehler: " + fehler )
            }
                }else{
            console.log("Tabelle erfolgreich angelegt.")
            }
            })
            })


        dbVerbindung.connect(function(fehler){
            dbVerbindung.query('INSERT INTO kunde(idKunde, vorname, nachname, ort, kennwort, mail) VALUES (150196, "Pit", "Kiff", "BOR", "123!", "pk@web.de"));', function (fehler) {
            
                if (fehler) {
            if(fehler.code == "ER_TABLE_EXISTS_ERROR"){
            console.log("Tabelle kunde existiert bereits und wird nicht angelegt.")
                
                }else{
            console.log("Fehler: " + fehler )
            }
                }else{
            console.log("Tabelle Kunde erfolgreich angelegt.")
            }
            })
            })
  // Programme verarbeiten oft Objekte der realen Welt.
// Objekte haben Eigenschaften.
// In unserem Bankimgprogramm interessieren uns Objekte,
// wie z. B. Kunde, Konto, Filiale, Bankautomat,...
// Alle Kunden unserer Bank haben dieselben Eigenschaften,
// aber unterschiedliche Eigenschafswerte

class Kunde{
    constructor(){
        this.IdKunde
        this.Vorname 
        this.Nachname
        this.Kennwort
        this.Kontostand
        this.Geburtsdatum
        this.Mail
        this.Rufnummer
    }
}



// Von der Kunden-Klasse wird eine konkrete Instanz 
// gebildet 

let kunde = new Kunde()

// Die konkrete Instanz bekommt Eigenschaftswerte
// zugewiesen

kunde.IdKunde = 150196
kunde.Nachname = "Smith"
kunde.Vorname = "Lana"
kunde.Geburtsdatum = "16.10.2002"
kunde.Mail = "smith@web.de"
kunde.Kennwort= "123"
kunde.Rufnummer = "+49177/896754306"

class Kundenberater{
    constructor (){
        this.IdKundenberater
        this.Vorname
        this.Nachname
        this.Position
        this.Mail
        this.Rufnummer
        this.Begruessung
    }
}

// es wird ein Kundenberater Objekt instanziiert

let kundenberater = new Kundenberater ()

kundenberater.IdKundenberater =150196
kundenberater.Vorname = "Paul"
kundenberater.Nachname = "Müller"
kundenberater.Position =  "Chefberater"
kundenberater.Mail = "mueller@n27bank-support.de"
kundenberater.Rufnummer = "+49 15789076542"
kundenberater.Begruessung = "Hallo, ich bin`s, Dein Kundenberater"

// Die Klasse Konto ist der Bauplan für alle konto-Objekte.
// in der Klasse werden alle relevanten Eigenschaften definiert 
// Die konto-Objekte, die aus dieser Klasse erzeugt werden, haben diesselben Eigenschaften,
// aber unterschiedliche Eigenschaftswerte  

class Konto{
    constructor(){
        // Die relevanten Eigenschaften werden im Konstruktor aufgelistet.
        //Eigenschaften werden immer großgeschrieben 
        this.Kontostand
        this.Art
        this.IBAN
        
    }
}

// Istanzierung eines objekts namens Konto vom Typ Konto 

// "let konto" bedeutet, dass ein Objekt namens Konto existieren soll. 
// Man sagt, das Konto wird deklariert. 

// "=new Konto" nennt man instanziirung. Bei der Instanziierung wird Festplatten-
//speicher reserviert, um bei der anschließenden Initialisierung konkrete
// Eigenschaftswerte für das Objekt zu speichern. 

let konto = new Konto ()

// Bei der Initialisierung werden konkrete Eigenschaftswerte in die 
// reservierten Speicherzellen geschrieben.
// Die Zuweisung von Eigenschaftswerten geschieht immer von rechts nach links.

konto.Kontostand = 25000
konto.IBAN = "DE02100500000024290661"
konto.Art = "Kreditkartenkonto"

class KreditBerechnen{
    constructor (){
        this.Kreditbetrag
        this.Zinssatz
        this.Laufzeit
    }


// eine Funktion berechnet etwas. Im Namen der Funktion steht also immer ein Verb.
//
    berechneGesamtkostenKredit (){
        return this.Betrag * this.Zinssatz /100 + this.Betrag 
    }
}

let kreditBerechnen = new KreditBerechnen

kreditBerechnen.Kreditbetrag = 250000
kreditBerechnen.Zinssatz= 1.5
kreditBerechnen.Laufzeit= 5




const express = require('express')
const bodyParser = require('body-parser')
const meineApp = express()
const cookieParser = require('cookie-parser')
meineApp.set('view engine', 'ejs')
meineApp.use(express.static('public'))
meineApp.use(bodyParser.urlencoded({extended: true}))
meineApp.use(cookieParser('geheim'))

const server = meineApp.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

// Die Methode meineApp.get('/' ...) wird abgearbeitet, wenn
// der Kunde die Indexseite (localhost:3000 bzw. 
// n27.herokuapp.com) ansurft.

meineApp.get('/',(browserAnfrage, serverAntwort, next) => {              
    
    // Wenn ein signierter Cookie mit Namen 'istAngemeldetAls' im Browser vorhanden ist,
    // dann ist die Prüfung wahr und es wird die gerenderte Index-Seite an den Browser
    // zurückgegeben. Anderenfalls wird die Login-Seite an den Browser gegeben.

    if(browserAnfrage.signedCookies['istAngemeldetAls']){

        // Wenn der Kunde bereits angemeldet ist, soll die
        // Index-Seite an den Browser gegeben werden.

        serverAntwort.render('index.ejs',{})
    }else{

        // Wenn der Kunde noch nicht eigeloggt ist, soll
        // die Loginseite an den Browser zurückgegeben werden.
        serverAntwort.render('login.ejs', {
            Meldung : ""
        })
    }                 
})

// Die Methode meineApp.post('/login' ...) wird abgearbeitet, sobald
// der Anwender im Login-Formular auf "Einloggen" klickt.

meineApp.post('/login',(browserAnfrage, serverAntwort, next) => {              
    
    // Die im Browser eingegebene IdKunde und Kennwort werden zugewiesen
    // an die Konstanten namens idKunde und kennwort.

    const idKunde = browserAnfrage.body.IdKunde
    const kennwort = browserAnfrage.body.Kennwort
    
    console.log("ID des Kunden: " + idKunde)
    console.log("Kennwort des Kunden: " + kennwort)

    // Die Identität des Kunden wird überprüft.
    
    if(idKunde == kunde.IdKunde && kennwort == kunde.Kennwort){
    
        // Ein Cookie namens 'istAngemeldetAls' wird beim Browser gesetzt.
        // Der Wert des Cookies ist das in eine Zeichenkette umgewandelte Kunden-Objekt.
        // Der Cookie wird signiert, also gegen Manpulationen geschützt.

        serverAntwort.cookie('istAngemeldetAls',JSON.stringify(kunde),{signed:true})
        console.log("Der Cookie wurde erfolgreich gesetzt.")

        // Wenn die Id des Kunden mit der Eingabe im Browser übereinstimmt
        // UND ("&&") das Kennwort ebenfalls übereinstimmt,
        // dann gibt der Server die gerenderte Index-Seite zurück.
        
        serverAntwort.render('index.ejs', {})
    }else{

        // Wenn entweder die eingegebene Id oder das Kennwort oder beides
        // nicht übereinstimmt, wird der Login verweigert. Es wird dann die
        // gerenderte Login-Seite an den Browser zurückgegeben.

        serverAntwort.render('login.ejs', {
            Meldung : "Ihre Zugangsdaten scheinen nicht zu stimmen."
        })
    }
})


// Wenn die login-Seite im Browser aufgerufen wird, ...
meineApp.get('/login',(browserAnfrage, serverAntwort, next) => {              

    // ... dann wird die login.ejs vom Server gerendert an den
    // Browser zurückgegeben:

    // Der Cookie wird gelöscht.

    serverAntwort.clearCookie('istAngemeldetAls')

    serverAntwort.render('login.ejs', {
        Meldung : "Bitte geben Sie die Zugangsdaten ein."
    })          
})


// Die meineApp.post('login') wird ausgeführt, sobald der Button
// auf dem Login-Formular gedrückt wird.

// Wenn die About-Seite angesurft wird, wird die about-Seite
// zum Browser zurückgegeben

meineApp.get('/about',(browserAnfrage, serverAntwort, next) => {              
   
    if(browserAnfrage.signedCookies['istAngemeldetAls']){

        // Wenn der Kunde bereits angemeldet ist, soll die
        // Index-Seite an den Browser gegeben werden.

        serverAntwort.render('about.ejs',{})
    }else{

        // Wenn der Kunde noch nicht eigeloggt ist, soll
        // die Loginseite an den Browser zurückgegeben werden.
        serverAntwort.render('login.ejs', {
            Meldung : ""
        })
    }                 
    // Wenn der Anmelde-Cookie  gesetzt ist, wird der Nutzer zu 
    // About-Seite gelenkt.  
       
})

meineApp.get('/support',(browserAnfrage, serverAntwort, next) => {              
    
    if(browserAnfrage.signedCookies['istAngemeldetAls']){

        serverAntwort.render('support.ejs', {
            Vorname: kundenberater.Vorname,
            Nachname: kundenberater.Nachname,
            Position: kundenberater.Position,
            Mail: kundenberater.Mail,
            Rufnummer: kundenberater.Rufnummer,
            Begruessung: kundenberater.Begruessung
        })
    }else{
        serverAntwort.render('login.ejs', {
            Meldung : ""
        })
    }  
}) 

meineApp.get('/profile',(browserAnfrage, serverAntwort, next) => {              
    
    

    if(browserAnfrage.signedCookies['istAngemeldetAls']){

        // Wenn der Kunde bereits angemeldet ist, soll die
        // Index-Seite an den Browser gegeben werden.

        serverAntwort.render('profile.ejs', {
            Vorname: kunde.Vorname,
            Nachname: kunde.Nachname,
            Mail: kunde.Mail,
            Rufnummer: kunde.Rufnummer,
            Kennwort: kunde.Kennwort,
            Erfolgsmeldung: ""
            })
    }else{

        // Wenn der Kunde noch nicht eigeloggt ist, soll
        // die Loginseite an den Browser zurückgegeben werden.
        serverAntwort.render('login.ejs', {
            Meldung : ""
        })
    }                           
}) 


    // Sobald der Speicher-Button auf der Profile-Seite gedrÜckt wird, 
    // wird die meineApp.post('/profile'...) abgearbeitet.

    meineApp.post('/profile',(browserAnfrage, serverAntwort, next) => {             
    
// die Erfolgsmeldung für das Speichern der geänderten Profildaten
// wird in eine lokale Variable namens
// Erfolgsmeldung gespeichert

        let erfolgsmeldung = ""

        if(kunde.Mail != browserAnfrage.body.Mail){

            // Wenn der Wert der Eigenschaft von kunde.Mail abweicht 
            // vom Wert der Eigenschaft Mail aus dem Browser-Formular,
            // dann wird die Erfolgsmeldung initialisiert:

            erfolgsmeldung  = erfolgsmeldung + " Änderung der Mail erfolgreich. "
            kunde.Mail = browserAnfrage.body.Mail
            console.log (erfolgsmeldung)
        }
            // *+* - Verkettung. Ursprüngliche Erfolgsmeldung wird verlängert


        if(kunde.Kennwort != browserAnfrage.body.Kennwort){
            erfolgsmeldung  = erfolgsmeldung + " Änderung des Kennworts erfolgreich. "
            kunde.Kennwort = browserAnfrage.body.Kennwort
            console.log (erfolgsmeldung)
        }

        if(kunde.Rufnummer != browserAnfrage.body.Rufnummer){
            erfolgsmeldung  = erfolgsmeldung + " Änderung der Rufnummer erfolgreich. "
            kunde.Rufnummer = browserAnfrage.body.Rufnummer
            console.log (erfolgsmeldung)
        }

    // Die im Browser eingegebenen Werte werden an den Server übermittelt 
    //und  in Konstanten gespeichert

    // Der Wert der Eigenschaft von Mail im Browser wird zugewiesen (=) 
    // an die Eigenschaft Mail des Objekts Kunde 
    
    kunde.Rufnummer = browserAnfrage.body.Rufnummer
    kunde.Kennwort = browserAnfrage.body.Kennwort
    
    
    console.log("Profil gespeichert.")
    

        serverAntwort.render('profile.ejs', {
            Vorname: kunde.Vorname,
            Nachname: kunde.Nachname,
            Mail: kunde.Mail,
            Rufnummer: kunde.Rufnummer,
            Kennwort: kunde.Kennwort,
            Erfolgsmeldung: erfolgsmeldung  
        })
    })
    // sobald der Button KontostandAnzeigen auf der Index-Seite gedrückt wird, 
    // wird die meineApp.get('/kontostandAnzeigen' - Funktion abgearbeitet
    
    meineApp.get('/KontostandAnzeigen',(browserAnfrage, serverAntwort, next) => {            
    
        if(browserAnfrage.signedCookies['istAngemeldetAls']){
    
            serverAntwort.render('KontostandAnzeigen.ejs', {
                Kontoart: konto.Art,
                Kontostand: konto.Kontostand,
                IBAN: konto.IBAN,
                
                
                 
            })
        }else{
            serverAntwort.render('login.ejs', {
                Meldung : ""
            })
        }  
    }) 

    meineApp.get('/kreditBerechnen',(browserAnfrage, serverAntwort, next) => {            
    
        if(browserAnfrage.signedCookies['istAngemeldetAls']){
    
            serverAntwort.render('kreditBerechnen.ejs', {
                Kreditbetrag: kreditBerechnen.Kreditbetrag,
                Zinssatz: kreditBerechnen.Zinssatz,
                Laufzeit: kreditBerechnen.Laufzeit,
            
            })
                 
        }else{
            serverAntwort.render('login.ejs', {
                Meldung : ""
            })
        }  
    }) 

    meineApp.post('/kreditBerechnen',(browserAnfrage, serverAntwort, next) => {             
        
                let erfolgsmeldung = ""
        
                if(kreditBerechnen.Kreditbetrag != browserAnfrage.body.Kreditanfrage){
        
                    // Wenn der Wert der Eigenschaft von kunde.Mail abweicht 
                    // vom Wert der Eigenschaft Mail aus dem Browser-Formular,
                    // dann wird die Erfolgsmeldung initialisiert:
        
                    erfolgsmeldung  = erfolgsmeldung + "Ihre Kreditkosten betragen "
                    kreditBerechnen.Betrag = browserAnfrage.body.Mail
                    console.log (erfolgsmeldung)
                }
            })
            
            // Die Funktion meineApp.get('/kontoAnlegen' wird abgearbeitet, 
            // sobald die Seite KontoAnlegen aufgerufen wird
            meineApp.get('/kontoAnlegen',(browserAnfrage, serverAntwort, next) => {  
                
                // Es wird geprüft ob, der User angemeldet ist, also ob der Cookie gesetzt ist           
   
                if(browserAnfrage.signedCookies['istAngemeldetAls']){
            
                    // Wenn der User angemeldet ist, wird die kontoAnlegen-Seite gerendert...

                    serverAntwort.render('kontoAnlegen.ejs',{})
                }else{
                    // Wenn der User nicht angemeldet ist, wird er zur Login-Seite zurückgeworfen

                    serverAntwort.render('login.ejs', {
                        Meldung : ""
                    })
                }                 
            })

           
 // Die Funktion meineApp.post('/kontoAnlegen'... wird abgearbeitet, sobald der Button 
 // auf der kontoAnlegen-Seite gedrückt wird und das Formular abgesendet ('gepostet')wird. 

meineApp.post('/kontoAnlegen',(browserAnfrage, serverAntwort, next) => {              
    
    //Die im Formular eingegebne Kontoart wird an die Kostante namens kontoArt zugewiesen
    
    const kontoArt = browserAnfrage.body.kontoArt
       
    console.log("Gewählte Kontart: " + kontoArt)
    
    // Die IBAN wird automtisch erzeugt. Die IBAN kennzeichnet das anzulegende Konto einmalig (Primary Key).
    
    let laenderkennung = "DE" // Ein string mit dem inhalt de wird zugewiesen einer variable namens landerkennung
    let bankleitzahl = 27000000 // Die Zahl... wird zugewiesen an eine variable namens Bankleitzahl

    // Die Zahl 111111111 wird zugewiesen an eine Variable namens min

    let min = 1111111111;

    // Die Zahl wird an eine Variable namens max zugewiesen 

    let max = 9999999999;

    // Eien Zufallszahl zwischen min und max wird von der Math-Bibliothek mit der Methode random()
    // erzeugt und an die Variable zufaellige Kontonummer zugewiesen 

    let zufaelligeKontonummer = Math.floor(Math.random() * (max - min + 1)) + min;
    
    console.log("Die zufällig generierte Kontonummer lautet: "+ zufaelligeKontonummer)

    // Die IBAN wird mit einer Node-Bibliothek errechnet. Die Parameter der Funktion zur Berechnung der
    // IBAN sind: Länderkennung, bankleitzahl und Kontonummer

    let iban = IBAN.fromBBAN(laenderkennung,bankleitzahl+ " " + zufaelligeKontonummer)
    console.log("IBAN: " + iban)
    
    if(IBAN.isValid(iban)){
        console.log("Die IBAN ist gültig.")
   
    }else{
   
        console.log("Die IBAN ist ungültig.")
    }
    // Für die generierte IBAN muss ein neuer Datensatz in der Tabelle konto anlgelegt werden.
    

    dbVerbindung.connect(function(fehler){
        dbVerbindung.query('INSERT INTO konto(iban, idKunde, anfangssaldo, kontoart, timestamp) VALUES ("' + iban + '", 150196, 1, "'+ kontoArt +'", NOW());', function (fehler) {
        
            if (fehler) {
                if(fehler.code == "ER_TABLE_EXISTS_ERROR"){
                console.log("Tabelle kunde existiert bereits und wird nicht angelegt.")
                    
                    }else{
                console.log("Fehler: " + fehler )
                }
                    }else{
                console.log("Neues Konto in der Tabelle konto angelegt.")
            }
        }) 
                serverAntwort.render('kontoAnlegen.ejs', {
                
                Erfolgsmeldung: "Das"+ kontoArt + "mit der IBAN"+ iban + "wurde erfolgreich angelegt."
    })

      
    }) 
               
})       
  
 //require('./Uebungen/ifUndElse.js')
 //require('./Uebungen/klasseUndObjekt.js')
 //require('./Uebungen/klausur.js')
 require('./Klausuren/20230111_klausur.js')