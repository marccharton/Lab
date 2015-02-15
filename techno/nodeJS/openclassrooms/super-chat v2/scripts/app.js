$(document).ready(function () {
	// Connection au serveur
	var socket = io.connect("http://localhost:8080");

	// Alert des messages provenant du serveur (debug)
	socket.on("message", function(message) {
		alert("Le serveur dit : " + message);
	});

	// Ajout d'une notification
	socket.on("add_notification", function (pseudo, message) {
		var dateFormat = getDate();
		var notificationBalise = '';
		notificationBalise += '<div class="notification-container">';
		notificationBalise += '	'+dateFormat+'	<span class="message-pseudo">'+pseudo+'</span> '+ message;
		notificationBalise += '</div>';
		$(".chat-container").append(notificationBalise);
		var objDiv = $("chat-container");
		objDiv.scrollTop = objDiv.scrollHeight;
	});

	// Ajout d'un message ecrit par un autre client
	socket.on("add_message", function (pseudo, message) {
		var dateFormat = getDate();
		var messageBalise = '';
		messageBalise += '<div class="message-container">';
		messageBalise += '	'+dateFormat+'	<span class="message-pseudo">'+pseudo+'</span> : <span class="message-text">'+message+'</span>';
		messageBalise += '</div>';
		$(".chat-container").append(messageBalise);
		var objDiv = $(".chat-container");
		//objDiv.scrollTop(objDiv.height());
		objDiv.animate({ scrollTop: 100000 }, 10000);
	});

	// Ajout d'un message ecrit par le client actuel
	socket.on("add_me_message", function (pseudo, message) {
		var dateFormat = getDate();
		var messageBalise = '';
		messageBalise += '<div class="message-container me-message">';
		messageBalise += '		'+dateFormat+' <span class="message-pseudo">'+pseudo+'</span> : <span class="message-text">'+message+'</span>';
		messageBalise += '</div>';
		$(".chat-container").append(messageBalise);
		var objDiv = $(".chat-container");
		objDiv.animate({ scrollTop: 100000 }, 1000);
	});

	// on demande le pseudo en boucle tant qu'il est vide, puis on connecte le client
	socket.on("need_login", function () {
		var pseudo = "";
		while (pseudo == "")
			pseudo = prompt("What's your name ?");
		$("#login").html(pseudo);
		socket.emit("connect_client", pseudo);
	});

	socket.emit("new_client");

	//quand on clique le bouton on envoie le message
	$("#messageButton").click(function (){
		sendMessage();
	});

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
	        else {
	        	sendMessage()
	        }
	        return false;
	    }
	});

	function sendMessage() {
		var text = $("#messageText");
		if (text.val() != "") {
			socket.emit("send_message", text.val());
			text.val("");
		}
	}

	function getDate() {
		var date = new Date();
		hours    = (date.getHours()<10?'0':'') + date.getHours() ;
		min      = (date.getMinutes()<10?'0':'') + date.getMinutes();
		sec      = (date.getSeconds()<10?'0':'') + date.getSeconds();
		return hours +'-'+ min +'-'+ sec;
	}
});