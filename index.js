
function checarEmail(){
if( document.forms[0].email.value=="" 
   || document.forms[0].email.value.indexOf('@')==-1 
     || document.forms[0].email.value.indexOf('.')==-1 )
	{
        var prep = "informe um email valido";
        var paragrafo  = document.getElementById("paragrafo").innerHTML;
        paragrafo = "<p>"+prep+"</p>";
        
        document.getElementById("paragrafo").innerHTML = paragrafo;
	   return false;
	}
}