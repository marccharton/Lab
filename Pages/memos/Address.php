<?php

Class Address
{
	private $_address_id;
	private $_address_customer_id;
	private $_address_location;
	private $_address_city;
	private $_address_zip_code;
	private $_address_is_order_address;
	private $_address_is_billing_address;	
	
	public function __construct() {
		echo "salut	je suis un new address ! <br />";
	}
	
	public function	hydrate(array $data) {
		echo "Je me fais hydrater hhmmm ya bon <br />";
		foreach ($data as $key => $value) {
			$method = 'set'.ucfirst($key);
			if (method_exists($this, $method))
				$this->$method($value);
		}
	}
        
        public function __call($name, $arguments) {
            echo "La fonction " . $name . " a ete appellee";
            echo " avec les arguments : <strong> " . implode($arguments, '</strong>, <strong>') . '</strong>';
        }
        public function toString() {
            echo "Address id = " . $this->_address_id . ", ";
            echo "Address customer id = " . $this->_address_customer_id . ", ";
            echo "Address location = " . $this->_address_location . ", ";
            echo "Address city = " . $this->_address_city . "<br />";
        }

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////// Public Poperties Getters

	public function address_id()	{
		return $this->_address_id;
	}
		
	public function address_customer_id()	{
		return $this->_address_customer_id;
	}
		
	public function address_location()	{
		return $this->_address_location;
	}
		
	public function address_city()	{
		return $this->_address_city;
	}
		
	public function address_zip_code()	{
		return $this->_address_zip_code;
	}
		
	public function address_is_order_address()	{
		return $this->_address_is_order_address;
	}
		
	public function address_is_billing_address()	{
		return $this->_address_is_billing_address;
	}
	
	
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////// Public Poperties Setters	
	
	public function setAddress_id($p)	{
		$this->_address_id = $p;
	}
		
	public function setAddress_customer_id($p)	{
		$this->_address_customer_id = $p;
	}
		
	public function setAddress_location($p)	{
		$this->_address_location = $p;
	}
		
	public function setAddress_city($p)	{
		$this->_address_city = $p;
	}
		
	public function setAddress_zip_code($p)	{
		$this->_address_zip_code = $p;
	}
		
	public function setAddress_is_order_address($p)	{
		$this->_address_is_order_address = $p;
	}
		
	public function setAddress_is_billing_address($p)	{
		$this->_address_is_billing_address = $p;
	}
}

?>