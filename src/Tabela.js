import React, { Component } from 'react';






class Tabela extends Component {
	

	
    state = {  }
    render() {  


function submit()
{
	var d = document.getElementById("tabeleczka");
	const obj = d.innerHTML
	const blob = new Blob([obj], {type : 'application/html'});
	
	saveFile(blob);
}

const saveFile = async (blob) => {
	const a = document.createElement('a');
	a.download = 'punkty-karne.html';
	a.href = URL.createObjectURL(blob);
	a.addEventListener('click', (e) => {
	  setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000);
	});
	a.click();
  };
		  
        return (
			
            <div>
				<div id="jazda">
		


				</div>
<button onClick={submit}>Zapisz tabelę</button>

            </div>
         );
    }
}
 
export default Tabela;
