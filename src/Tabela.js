import React, { Component } from 'react';






class Tabela extends Component {
	

	
    state = {  }
    render() {  

		function upload() {

			var dateTime = sessionStorage.getItem("Data");
			console.log(dateTime);
			document.getElementById("dacisko").innerHTML=""+dateTime+"";
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
			}
			else if (flaga === "au"){
				obrazek.setAttribute("src", "/images/flags/png/au.png");
			}
			else if (flaga === "be"){
				obrazek.setAttribute("src", "/images/flags/png/be.png");
			}
			else if (flaga === "bh"){
				obrazek.setAttribute("src", "/images/flags/png/bh.png");
			}
			else if (flaga === "ca"){
				obrazek.setAttribute("src", "/images/flags/png/ca.png");
			}
			else if (flaga === "cz"){
				obrazek.setAttribute("src", "/images/flags/png/cz.png");
			}
			else if (flaga === "de"){
				obrazek.setAttribute("src", "/images/flags/png/de.png");
			}
			else if (flaga === "es"){
				obrazek.setAttribute("src", "/images/flags/png/es.png");
			}
			else if (flaga === "hu"){
				obrazek.setAttribute("src", "/images/flags/png/hu.png");
			}
			else if (flaga === "it"){
				obrazek.setAttribute("src", "/images/flags/png/it.png");
			}
			else if (flaga === "kr"){
				obrazek.setAttribute("src", "/images/flags/png/kr.png");
			}
			else if (flaga === "mc"){
				obrazek.setAttribute("src", "/images/flags/png/mc.png");
			}
			else if (flaga === "nl"){
				obrazek.setAttribute("src", "/images/flags/png/nl.png");
			}
			else if (flaga === "sa"){
				obrazek.setAttribute("src", "/images/flags/png/sa.png");
			}
			else if (flaga === "th"){
				obrazek.setAttribute("src", "/images/flags/png/th.png");
			}
			else if (flaga === "uk"){
				obrazek.setAttribute("src", "/images/flags/png/uk.png");
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
			var d = document.getElementById("jazda");
			console.log(d.innerHTML);
		}

		  
        return (
			
            <div>
				<div id="jazda">
                <table id='tabelka'>
	<thead>
		<tr>
			<th><b>ŁĄCZNIE</b></th>
			<th><b>KTO</b></th>
			<th><b>Seria F1</b></th>
			<th><b>Seria F3</b></th>
			<th><b>Seria ATC</b></th>
			<th><b>Seria GT</b></th>
			<th><b>Eventy</b></th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td id="Tomaszpkt">11</td>
			<td >Tomasz</td>
			<td id="Tomaszf1"></td> 
			<td id="Tomaszf3"></td>
			<td id="Tomaszatc"><img src="/images/flags/png/de.png" title="R0 Nurburgring" /> 3<img src="/images/flags/png/kr.png" title="R6 Korea"/> 2 </td>
			<td id="Tomaszgt"></td>
			<td id="Tomaszev"><img src="/images/flags/png/it.png" title="McLaren Challenge"/> 6 </td>
		</tr>
		<tr>
			<td id="WojciechNowakpkt">15</td>
			<td >Wojciech Nowak</td>
			<td id="WojciechNowakf1"></td>
			<td id="WojciechNowakf3"></td>
			<td id="WojciechNowakatc"><img src="/images/flags/png/de.png" title="R0 Nurburgring"/> 5</td>
			<td id="WojciechNowakgt"><img src="/images/flags/png/it.png" title="R0 Imola"/> 2 <img src="/images/flags/png/uk.png" title="R3 Outlon Park"/> 2 </td>
			<td id="WojciechNowakev"></td>
		</tr>
		<tr>
			<td id="Mariuszpkt">9</td>
			<td>Mariusz</td>
			<td id="Mariuszf1"></td>
			<td id="Mariuszf3"><img src="/images/flags/png/bh.png" title="R4 Bahrain"/> 1 <img src="/images/flags/png/sa.png" title="R5 Jeddah"/> 1 </td>
			<td id="Mariuszatc"><img src="/images/flags/png/cz.png" title="R1 Most"/> 4 <img src="/images/flags/png/es.png" title="R2 Jarama"/> 1<br /><img src="/images/flags/png/hu.png" title="R3 Hungaroring"/> 1 </td>
			<td id="Mariuszgt"></td>
			<td id="Mariuszev"><img src="/images/flags/png/it.png" title="McLaren Challenge"/> 1</td>
		</tr>
		<tr>
			<td id="Adampkt">9</td>
			<td>Adam</td>
			<td id="Adamf1"></td>
			<td id="Adamf3"><img src="/images/flags/png/bh.png" title="R4 Bahrain"/> 2</td>
			<td id="Adamatc"><img src="/images/flags/png/hu.png" title="R3 Hungaroring"/> 2<img src="/images/flags/png/th.png" title="R5 Chang"/> 5</td>
			<td id="Adamgt"></td>
			<td id="Adamev"></td>
		</tr>
	</tbody>
  <tfoot>
		<tr>
			<th></th>
			<th>Aktualizacja:</th>
			<th id ="dacisko">0000-00-00 00:00:00</th>
			<th></th>
			<th></th>
			<th></th>
			<th></th>
		</tr>
	</tfoot>
</table>
</div>
<button onClick={submit}>Załaduj Dane do Tabeli</button>

            </div>
         );
    }
}
 
export default Tabela;
