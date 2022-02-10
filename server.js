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
    }
}

// Von der Kunden-Klasse wird eine konkrete Instanz 
// gebildet 

let kunde = new Kunde()

// Die konkrete Instanz bekommt Eigenschaftswerte
// zugewiesen

kunde.IdKunde = 150196
kunde.Nachname = "Eyre"
kunde.Vorname = "Jane"
kunde.Geburtsdatum = "16.10.2002"
kunde.MAil = "eyre@web.de"
kunde.Kennwort = "123"


const express = require('express')
const bodyParser = require('body-parser')
const meineApp = express()
meineApp.set('view engine', 'ejs')
meineApp.use(express.static('public'))
meineApp.use(bodyParser.urlencoded({extended: true}))

const server = meineApp.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

meineApp.get('/',(browserAnfrage, serverAntwort, next) => {              
    serverAntwort.render('index.ejs', {})          
})

meineApp.post('/login',(browserAnfrage, serverAntwort, next) => {              
   
    const idKunde = browserAnfrage.body.IdKunde
    const kennwort = browserAnfrage.body.Kennwort

    console.log("ID des Kunden: " + idKunde)
    console.log("Kennwort des Kunden : "+ kennwort)

    if(idKunde == kunde.IdKunde){
        serverAntwort.render('index.ejs', {}) 
     }else{
    serverAntwort.render('login.ejs', {}) 
    }
             
})

// Wenn die login-Seite im Browser aufgerufen wird, ...
// ... dann wird die login.ejs vom Server gerendert an den
// Browser zurückgegeben:   
meineApp.get('/login',(browserAnfrage, serverAntwort, next) => {      
        
    serverAntwort.render('login.ejs', {})          
})

// Die meineApp.post("login") wird ausgeführt sobald der Button 
// auf dem Login-Formular gedrückt wird.

meineApp.post('/login',(browserAnfrage, serverAntwort, next) => {      
        
    serverAntwort.render('index.ejs', {})          
})



require('./Uebungen/ifUndElse')
require('./Uebungen/klasseUndObjekt.js')