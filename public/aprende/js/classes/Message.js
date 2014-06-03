function Message ( x , y , message ) {
	this.x = x ; 
	this.y = y ; 
	this.message = message ; 
	
	this.setMessage = function ( message1 ) {
		this.message = message1
	}
	
	this.render = function () {
		//alert ( "entro " )  ; 
		var kin = new Kinetic_2d("layer2");	
		var canvas = kin.getCanvas();
		var context = kin.getContext(); 
		//writeMessage ( context , message1 ) ; 
		context.font = "18pt Calibri";
		context.fillStyle = "black";
		context.fillText( this.message , 10, 25);
	} 
}
