console.log("KLAUSUR")
//logische Operationen

// Wenn ein Scjhüler zwischen 20 oder höchstens 27 Punkten hat, bekommt er eine drtei in WI

let untergrenze = 20
let obergrenze = 27
let punktzahl = 27.1
    if ( punktzahl > untergrenze && punktzahl <= obergrenze ){
        console.log ("Der Schüler hat eine drei in WI")
    }else{ 
        console.log ("Der Schüler hat keine drei WI")
    }

    // Wenn ein Kind kliener als ein Meter ist oder noch keine 7 Jahre alt ist,
    // hat es Eintritt im Schwimmbad (eine Option von zwei erfüllen -> oder )

    let obergrenzeGroesseInMeter = 1
    let obergrenzeAlterInJahre = 7
    let alter = 9
    let groesse = 1
    if( alter < obergrenzeAlterInJahre || groesse < obergrenzeGroesseInMeter){
       
        console.log ( "Freier Eintritt")
    }else{

        console.log ("Kein freier Eintritt")
    }
 // Geben Sie mit einer Schleife 6 mal untereinander den Ausruf "Hallo!" aus 
 // let i = 0; bedeutet, dass eine Variable namens i mit dem Wert 0 initialisiert wird.
// i < 6; bedeutet, dass die Schleife sooft durchlaufen wird, solange die Prüfung wahr ist 
 // i++ bedeutet, dass i bei jedem Schleifendurchlauf um 1 hochgezählt wird.
    for (let i = 0; i <= 6; i++){
    
    console.log((i + 1) + ". Hallo!")
    }

  //  Wenn ein Euro auf dem Sparbuch angelegt bei 10% Zinsen. Wie hoch ist der Kapitalwert
  // nach 5 Jahren 

  let anfangsbetrag = 1
  let zinssatz = 0.1 
 let kapitalwert = anfangsbetrag
 let laufzeit = 2

  for ( let i = 0; i < 5; i++){
        kapitalwert = kapitalwert + kapitalwert * zinssatz
  }
  console.log("Kapitalwert nach " + laufzeit + "Jahren:" + kapitalwert)

  // Zählen sie mit einer Schleife von 3 bis 1 herunter

  for( let i = 3; i > 0; i--){
    console.log("Countdown: " + i)
  }