	window.onload = addData();
	
	window.onbeforeunload = function () {
		return confirm('Etes vous sur de quitter cette superbe page ?!');
	}
	
	function $(id) {
		return document.getElementById(id);
	}
	
	function addData() {
		var requete = new XMLHttpRequest();
		
		//var url = 'http://www.meteorologic.net/webmaster/xml/xml_file_27595.xml';
		var url = 'http://www.weather.com/weather/today/Paris+France+FRXX0076';
		netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
		
		requete.open('GET', url, false);
		
		alert('coucou');
		// requete.open('GET', 'data.json', false);
		requete.send(null);	
		
		
		//var data = eval('(' + requete.responseText + ')');
		
		// $('temperature').innerHTML = data.Temp + "°C";
		// $('humidite').innerHTML = data.Hum + " %";
		// $('tendance').innerHTML = data.Baro;
		}
		
	function testPopup() {
		window.open("index.html", null, 'height=700, width=800, status=yes, toolbar=no, menubar=no, location=no');
	}
	
	function changePage() {
		window.location.href = "index.html";
	}
	
	function refreshPage() {
		window.location.reload();
	}
	
	function historyBack() {
		window.history.back();
	}
	
	function historyNext() {
		window.history.forward();
	}
	
	function clock()
	{
		var date = new Date();
		$('clock').innerHTML = date.getDate() + '/' + date.getMonth()+1 + '/' + date.getFullYear() + ' ';
		$('clock').innerHTML += date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
		window.setTimeout(clock, 1000);
	}	
	
	function changeTitle() {
		document.title = "Nouveau titre !";
	}
	
	function changeBackground() {
		document.body.style.background = '#ddF';
	}
	
	clock();