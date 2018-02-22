function getCaminhoBase(){
	var contexto = window.location.pathname.substring(0, window.location.pathname.indexOf("/",2));
	return window.location.href.replace(contexto,'');
}

function redirectDocs(contexto){
	 var win = window.open(getCaminhoBase()+contexto, '_blank');
	 win.focus();	
}

var caminhoSuporteDesenv = "https://connections.bb.com.br/wikis/home?lang=pt-br#!/wiki/CFE%20-%20Controle%20de%20Fluxo%20de%20Execu%C3%A7%C3%A3o%20de%20Transa%C3%A7%C3%B5es%20(%20Grafeno%20)";
var caminhoForum = "https://connections.bb.com.br/forums/html/forum?id=c7d0c498-0d6b-44a6-a90c-f74401fff97e&ps=25";

function redirect(caminho){
	 var win = window.open(caminho, '_blank');
	 win.focus();	
}
