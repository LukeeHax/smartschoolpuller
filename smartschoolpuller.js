// define variables
let name; // naam   bv. Jeffrey
let surname; // achternaam   bv. Dalgleish
let extranames; // extra namen
let postalCode; // postcode
let loc; // locatie   bv. Schriek
let street; // straat
let busnr; // busnummer
let birthday; // geboortedag
let birthplace; // geboorteplaats
let homePhone; // telefoonnummer
let fax; // fax
let mobilePhone; // mobiele telefoonnummer
let streetnr; // huisnummer
let email; // mailadres
let prn; // rijksregisternummer
const fetches = [];

// grab info
const fetch1 = fetch('https://dbhaacht.smartschool.be/?module=Profile&file=personalia&function=personalia')
  .then(response => response.text())
  .then(data => {

    const tempElement = document.createElement('div');
    tempElement.innerHTML = data;

    name = tempElement.querySelector('[name="name"]').value;
    surname = tempElement.querySelector('[name="surname"]').value;
    extranames = tempElement.querySelector('[name="extranames"]').value;
    postalCode = tempElement.querySelector('[name="postalCode"]').value;
    loc = tempElement.querySelector('[name="location"]').value;
    street = tempElement.querySelector('[name="street"]').value;
    busnr = tempElement.querySelector('[name="busnr"]').value;
    birthday = tempElement.querySelector('[name="birthday"]').value;
    birthplace = tempElement.querySelector('[name="birthplace"]').value;
    homePhone = tempElement.querySelector('[name="homePhone"]').value;
    fax = tempElement.querySelector('[name="fax"]').value;
    mobilePhone = tempElement.querySelector('[name="mobilePhone"]').value;
    streetnr = tempElement.querySelector('[name="streetnr"]').value;
    email = tempElement.querySelector('[name="email"]').value;
    prn = tempElement.querySelector('[name="prn"]').value;
    //send(name)
    
  });
fetches.push(fetch1)

Promise.all(fetches)
  .then(() => {
    console.log(name);
    console.log(surname);
    console.log(extranames);
    console.log(postalCode);
    console.log(loc);
    console.log(street);
    console.log(busnr);
    console.log(birthday);
    console.log(birthplace);
    console.log(homePhone);
    console.log(fax);
    console.log(mobilePhone);
    console.log(streetnr);
    console.log(email);
    console.log(prn);
  });


//function send(data) {
//    console.log(data);
//};
