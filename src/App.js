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

  submit()
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

function upload() {

  var dateTime = sessionStorage.getItem("Data");
  console.log(dateTime);
  var kierowca = sessionStorage.getItem("Kierowca");
  var flaga = sessionStorage.getItem("Flaga");
  var seria = sessionStorage.getItem("Seria");
  var punkty = sessionStorage.getItem("Punkty");
  var opis = sessionStorage.getItem("Opis");

  let bemc = ""+kierowca+seria+"";
  let pktbemc = ""+kierowca+"pkt";
  console.log(pktbemc);
  let suma =parseFloat(document.getElementById(pktbemc).innerText) + parseFloat(punkty);

  if (suma >=10){
  document.getElementById(pktbemc).style.color = "red";
  document.getElementById(pktbemc).style.fontWeight = "750";
  }
  else if (suma <=9){
    document.getElementById(pktbemc).style.color = "black";
    document.getElementById(pktbemc).style.fontWeight = "400";
  }

  
  
  document.getElementById(pktbemc).innerHTML = ""+suma+"";
  console.log(bemc);
  var obrazek = document.createElement("IMG");
  obrazek.setAttribute("title", opis);

  if (flaga === "at"){
    obrazek.setAttribute("src", "/images/flags/png/at.png");
    obrazek.setAttribute("alt","Austria");
  }
  else if (flaga === "au"){
    obrazek.setAttribute("src", "/images/flags/png/au.png");
    obrazek.setAttribute("alt","Australia");
  }
  else if (flaga === "be"){
    obrazek.setAttribute("src", "/images/flags/png/be.png");
    obrazek.setAttribute("alt","Belgia");
  }
  else if (flaga === "bh"){
    obrazek.setAttribute("src", "/images/flags/png/bh.png");
    obrazek.setAttribute("alt","Bahrain");
  }
  else if (flaga === "ca"){
    obrazek.setAttribute("src", "/images/flags/png/ca.png");
    obrazek.setAttribute("alt","Kanada");
  }
  else if (flaga === "cz"){
    obrazek.setAttribute("src", "/images/flags/png/cz.png");
    obrazek.setAttribute("alt","Czechy");
  }
  else if (flaga === "de"){
    obrazek.setAttribute("src", "/images/flags/png/de.png");
    obrazek.setAttribute("alt","Niemcy");
  }
  else if (flaga === "es"){
    obrazek.setAttribute("src", "/images/flags/png/es.png");
    obrazek.setAttribute("alt","Hiszpania");
  }
  else if (flaga === "hu"){
    obrazek.setAttribute("src", "/images/flags/png/hu.png");
    obrazek.setAttribute("alt","Węgry");
  }
  else if (flaga === "it"){
    obrazek.setAttribute("src", "/images/flags/png/it.png");
    obrazek.setAttribute("alt","Włochy");
  }
  else if (flaga === "kr"){
    obrazek.setAttribute("src", "/images/flags/png/kr.png");
    obrazek.setAttribute("alt","Korea");
  }
  else if (flaga === "mc"){
    obrazek.setAttribute("src", "/images/flags/png/mc.png");
    obrazek.setAttribute("alt","Monako");
  }
  else if (flaga === "nl"){
    obrazek.setAttribute("src", "/images/flags/png/nl.png");
    obrazek.setAttribute("alt","Holandia");
  }
  else if (flaga === "sa"){
    obrazek.setAttribute("src", "/images/flags/png/sa.png");
    obrazek.setAttribute("alt","Arabia Saudyjska");
  }
  else if (flaga === "th"){
    obrazek.setAttribute("src", "/images/flags/png/th.png");
    obrazek.setAttribute("alt","Tajlandia");
  }
  else if (flaga === "uk"){
    obrazek.setAttribute("src", "/images/flags/png/uk.png");
    obrazek.setAttribute("alt","Wielka Brytania");
  }
  
  
  
  
  
  
  







  document.getElementById(bemc).appendChild(obrazek);
  var calosc = ""+" "+punkty+" ";
  document.getElementById(bemc).insertAdjacentHTML('beforeend', calosc);
  

  

  
}
function sortTable(sortColumn){
var tableData = document.getElementById("tabelka").getElementsByTagName('tbody').item(0);
var rowData = tableData.getElementsByTagName('tr');            
for(var i = 0; i < rowData.length - 1; i++){
  for(var j = 0; j < rowData.length - (i + 1); j++){
    if(Number(rowData.item(j).getElementsByTagName('td').item(sortColumn).innerHTML.replace(/[^0-9\.]+/g, "")) < Number(rowData.item(j+1).getElementsByTagName('td').item(sortColumn).innerHTML.replace(/[^0-9\.]+/g, ""))){
      tableData.insertBefore(rowData.item(j+1),rowData.item(j));
    }
  }
}
}
function submit(){
  sortTable();
  upload();
  sortTable();
  pokazkoda();
}
function pokazkoda(){
  var d = document.getElementById("tabeleczka");
  console.log(d.innerHTML);
}

class App extends Component {
 
// On file select (from the pop up) 
onFileChange = async (e) => {
  e.preventDefault()
  const reader = new FileReader()
  reader.onload = async (e) => { 
    const text = (e.target.result)
    var d = document.getElementById("tabeleczka");
    d.innerHTML = text;

  };
  reader.readAsText(e.target.files[0])
}

  render() {
    return (

      <div className="App">

          
      <div> 
        <input type="file" onChange={this.onFileChange} />
      </div> 
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
          <button onClick={PktKarne}>Dodaj punkty</button>



        </form>
        <h1>Dodaj nowego kierowcę</h1>
        <form name="Dodajkierowcę" method="get">
        <label>Kierowca:</label><input className='format' id="nickname" type="text"></input><br/>

        <button onClick={AddDriver}>Dodaj kierowcę</button>
        </form>
        <span id="kodzik"></span>
      </div>);
  }
}

export default App;
