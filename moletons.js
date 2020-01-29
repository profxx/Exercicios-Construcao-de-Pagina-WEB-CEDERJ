/*

Moletons - AD2 - Javascript

*/

var jan;

function acessaPopup(tipo){
	if(tipo == 0){
		jan=window.open("heringCinza.html", "_blank","width=320,height=500");
	}
	if(tipo == 1){
		jan=window.open("heringPreto.html", "_blank","width=320,height=500");
	}
	if(tipo == 2){
		jan=window.open("malweeCinza.html", "_blank","width=320,height=500");
	}
	if(tipo == 3){
		jan=window.open("rippingAzul.html", "_blank","width=320,height=500");
	}
	if(tipo == 4){
		jan=window.open("rippingCinza.html", "_blank","width=320,height=500");
	}
	if(tipo == 5){
		jan=window.open("rippingPreto.html", "_blank","width=320,height=500");
	}
}

function fechaJanela(){
	jan.close();
}
	


