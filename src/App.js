import React, { Component } from 'react';

import './App.css';


function PktKarne() {

  let driver = document.getElementById("kierowca").value;
  let seria = document.getElementById("seria").value;
  let flaga = document.getElementById("panstwo").value;
  let punkty = document.getElementById("pkt").value;
  let opis = document.getElementById("opis").value;

  sessionStorage.setItem("Kierowca", driver);
  sessionStorage.setItem("Seria", seria);
  sessionStorage.setItem("Flaga", flaga);
  sessionStorage.setItem("Punkty", punkty);
  sessionStorage.setItem("Opis", opis);

  
}

const onSubmit = (e) => {
  e.preventDefault();
  var today = new Date();

  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  var dateTime = date + ' ' + time;
  console.log(dateTime);

  sessionStorage.setItem("Data", dateTime);
};
function AddDriver(e){
e.preventDefault();
let kierowca = document.getElementById("nickname").value;
console.log(kierowca);
var table = document.getElementById("tabelka");
var row = table.insertRow();
var punktykierowcy = row.insertCell();
  punktykierowcy.innerHTML = "0";
  punktykierowcy.id=""+kierowca+"pkt";
var nazwakierowcy = row.insertCell();
    nazwakierowcy.innerHTML = ""+kierowca+"";
var seriaf1 = row.insertCell();
  seriaf1.id = ""+kierowca+"f1";
var seriaf3 = row.insertCell();
  seriaf3.id = ""+kierowca+"f3";
var seriaatc = row.insertCell();
  seriaatc.id = ""+kierowca+"atc";
var seriagt = row.insertCell();
  seriagt.id = ""+kierowca+"gt";
var seriaev = row.insertCell();
  seriaev.id = ""+kierowca+"ev";



  


}

class App extends Component {

  componentDidMount() {
    // call api or anything
    console.log("Component has been rendered");

    var tableHtml = "/punkty-karne.html"
   // var tableHtml = 'http://localhost/MyTestWordPressPage/wp-content/punkty-karne.html'

    fetch(tableHtml)
    .then(function(response){
        return response.text();
    }).then(function (data) {

    var d = document.getElementById("tabeleczka");
    d.innerHTML = data;
})
};



  render() {
    return (
      <div className="App">
        <h1>Dodaj nowe punkty karne dla kierowcy</h1>
        <form onSubmit={onSubmit} name="formularz" method="get">
          <label>Państwo</label> <select id="panstwo" required>
            <option value="sa">Arabia Saudyjska</option>
            <option value="at">Austria</option>
            <option value="au">Australia</option>
            <option value="bh">Bahrajn</option>
            <option value="be">Belgia</option>
            <option value="cz">Czechy</option>
            <option value="nl">Holandia</option>
            <option value="es">Hiszpania</option>
            <option value="ca">Kanada</option>
            <option value="kr">Korea</option>
            <option value="mc">Monako</option>
            <option value="de">Niemcy</option>
            <option value="th">Tajlandia</option>
            <option value="hu">Węgry</option>
            <option value="uk">Wielka Brytania</option>
            <option value="it">Włochy</option>



          </select>
          <br />
          <label>Kierowca i Seria</label> <input className="format"required id="kierowca" type="text"></input> <select id="seria" required>
            <option value="f1">Seria F1</option>
            <option value="f3">Seria F3</option>
            <option value="atc">Seria ATC</option>
            <option value="gt">Seria GT</option>
            <option value="ev">Eventy</option>

          </select>
          <br />
          <label>Numer wyścigu i tor</label> <input required id="opis" type="text"></input>
          <br />
          <label>Ilość punktów karnych:</label> <input required id="pkt" type="number"></input>
          <br />
          <button onClick={PktKarne}>Zatwierdź</button>



        </form>
        <h1>Dodaj nowego kierowcę</h1>
        <form name="Dodajkierowcę" method="get">
        <label>Kierowca:</label><input className='format' id="nickname" type="text"></input><br/>

        <button onClick={AddDriver}>Zatwierdź</button>
        </form>
        <span id="kodzik"></span>
      </div>);
  }
}

export default App;
