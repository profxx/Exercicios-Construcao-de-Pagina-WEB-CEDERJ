/*
* Criar Listas
*/

var tabMarcas = new Array(3);
var tabCores = new Array(3);

tabMarcas[0] = ["Hering", 300, 360 ];
tabMarcas[1] = ["Malwee", 300, 360 ];
tabMarcas[2] = ["Hipping", 300, 360 ];

tabCores[0] = [ ["Hering (Cinza)", "P/M/G/XG", 70], ["Hering (Preto)", "P/M/G/XG", 70] ];
tabCores[1] = [ ["Malvwee", "Cinza", 40] ];
tabCores[2] = [ ["Hipping", "SamsungJ5", 80], ["Hipping", "SamsungJ7", 80], ["Hipping", "SamsungJ7", 80] ];

/* 
Função de abrir a janela
*/



function MostraCores() {
	var jan = open(
		"", 
		tabMarcas[tipo][0],
		"location=no,status=no,width=" +	
		tabCores[tipo][0] + ",height=");
	
	with (jan.document) {
	write("<html><head><title>Moletons</title>");
	write("<link rel='stylesheet' type='text/css'");
	write(" href='moletons.css'>");
	write("</head><body>");
	write("<div class='apres'>");
	write("<h2>", tabMarcas[tipo][0], "</h2>");
	write("<img class='imgcel' src='imagens/" +	tabCores[tipo][0][1] + ".jpg' />");
	write("</div><ul>");
	
	for (i = 0; i < tabCores[tipo].length; i++)
	write("<li>", tabCores[tipo][i][0],
	" - R$ ", tabCores[tipo][i][2],
	",00</li>");
	write("</ul>");
	write("<div class='apres'>");
	write("<input type='button' value='Fechar' ");
	write("onClick='window.close();'/></div>");
	write("</form></div></body></html>");
	close();
	}
}

/*



function MostraCores(tipo){
	var jan = open("", tabMarcas[tipo][0],
	"location=no,status=no,width=" +
	tabMarcas[tipo][1] + ",height=" +
	tabMarcas[tipo][2] + "");
	
	with (jan.document) {
	write("<html><head><title>Moletons</title>");
	write("<link rel='stylesheet' type='text/css'");
	write(" href='moletons.css'>");
	write("</head><body>");
	write("<div class='apres'>");
	write("<h2>", tabMarcas[tipo][0], "</h2>");
	write("<img class='imgcel' src='imagens/" +	tabCores[tipo][0][1] + ".jpg' />");
	write("</div><ul>");
	
	for (i = 0; i < tabCores[tipo].length; i++)
	write("<li>", tabCores[tipo][i][0],
	" - R$ ", tabCores[tipo][i][2],
	",00</li>");
	write("</ul>");
	write("<div class='apres'>");
	write("<input type='button' value='Fechar' ");
	write("onClick='window.close();'/></div>");
	write("</form></div></body></html>");
	close();
	}
}

*/