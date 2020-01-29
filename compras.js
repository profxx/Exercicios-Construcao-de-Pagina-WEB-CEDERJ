/* 
Javascript do COMPRAS.HTML
*/

function VerificaTelef( campo ) {
    var i, c;
    var strTel = campo.value;
    
    if ( strTel.length != 8 ) {
        alert("Erro ao digitar um telefone fixo com menos (ou mais) de 8 dígitos");
    return false;
    }
    
    for ( i = 0; i < 8; i++ ) {
        c = strTel.charAt(i);
    
        if ( (c < '0') || (c > '9')) {
            alert("Telefone só pode ter dígitos, caracter " + c + " inválido!");
        return false;
        }
    }
    return true;
    }