class Discovery {
	_property1 : number;
	_property2 : number;
	
	Discovery()
	{
		this._property1 = 47;
		this._property2 = 42;		
	}
	
	GetSomeDatas()
	{
		alert('Ouech tu as récupéré des datas !');
		alert('Tes prop valent : {$this._property1} and {$this._property1}. ');
	}
}

var test = new Discovery();