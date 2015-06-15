$(document).ready(function () {
	// Connection au serveur
	var socket = io.connect("http://localhost:8080");

	// Alert des messages provenant du serveur (debug)
	socket.on("message", function(message){
		alert("Les serveur dit : " + message);
	});

	// Ajout d'une notification
	socket.on("add_notification", function (pseudo, message) {
		var chat_container = $(".chat-container");
		var content = chat_container.html();
		var notificationBalise = '';
		notificationBalise += '<div class="notification-container">';
		notificationBalise += '		<span class="message-pseudo">'+pseudo+'</span> '+ message;
		notificationBalise += '</div>';
		content += notificationBalise;
		chat_container.html(content);
	});

	// Ajout d'un message ecrit par un autre client
	socket.on("add_message", function (pseudo, message) {
		var chat_container = $(".chat-container");
		var content = chat_container.html();
		var messageBalise = '';
		messageBalise += '<div class="message-container">';
		messageBalise += '		<span class="message-pseudo">'+pseudo+'</span> : <span class="message-text">'+message+'</span>';
		messageBalise += '</div>';
		content += messageBalise;
		chat_container.html(content);
	});

	// Ajout d'un message ecrit par le client actuel
	socket.on("add_me_message", function (pseudo, message) {
		var chat_container = $(".chat-container");
		var content = chat_container.html();
		var messageBalise = '';
		messageBalise += '<div class="message-container me-message">';
		messageBalise += '		<span class="message-pseudo">'+pseudo+'</span> : <span class="message-text">'+message+'</span>';
		messageBalise += '</div>';
		content += messageBalise;
		chat_container.html(content);
	});

	//quand on clique le bouton on envoie le message
	$("#messageButton").click(function (){
		var text = $("#messageText");
		socket.emit("send_message", text.val());
		text.val("");
	});

	// on demande le pseudo en boucle tant qu'il est vide
	var pseudo = "";
	while (pseudo == "")
		pseudo = prompt("What's your name ?");
	$("#login").html(pseudo);
	socket.emit("new_client", pseudo);

	// gestion du Ctrl+Entrer
	$("#messageText").keydown(function (e) {
	    if (e.keyCode == 13) {
	        if (e.ctrlKey) {
	            var val = this.value;
	            if (typeof this.selectionStart == "number" && typeof this.selectionEnd == "number") {
	                var start = this.selectionStart;
	                this.value = val.slice(0, start) + "\n" + val.slice(this.selectionEnd);
	                this.selectionStart = this.selectionEnd = start + 1;
	            } else if (document.selection && document.selection.createRange) {
	                this.focus();
	                var range = document.selection.createRange();
	                range.text = "\r\n";
	                range.collapse(false);
	                range.select();
	            }
	        }
	        else
	        {
	        	var text = $("#messageText");
				socket.emit("send_message", text.val());
				text.val("");
	        }
	        return false;
	    }
	});
});