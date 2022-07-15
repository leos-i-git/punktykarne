import React, { Component } from 'react';






class Tabela extends Component {
	

	
    state = {  }
    render() {  

		function upload() {

			var dateTime = sessionStorage.getItem("Data");
			console.log("hello");
			console.log(dateTime);
			var kierowca = sessionStorage.getItem("Kierowca");
			var flaga = sessionStorage.getItem("Flaga");
			var seria = sessionStorage.getItem("Seria");
			var punkty = sessionStorage.getItem("Punkty");
			var opis = sessionStorage.getItem("Opis");
			console.log("hello2");
		
			let bemc = ""+kierowca+seria+"";
			let pktbemc = ""+kierowca+"pkt";
			console.log("hello3");
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

		  
        return (
			
            <div>
				<div id="jazda">
		


				</div>
<button onClick={submit}>Załaduj Dane do Tabeli</button>

            </div>
         );
    }
}
 
export default Tabela;
