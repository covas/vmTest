function Circle ( x , y , r , name , mouseDown , color ) {
	this.r = r ;
	this.x = x;
	this.y = y ;
	this.color = color ;
	this.name = name ;
	this.mouseDown = mouseDown ;
	
	this.setX = function ( xp ) {
		this.x = xp ; 
	}
	
	
	this.setColor = function ( color1 ) {
		this.color = color1 ; 
	}
	
	this.setName = function ( name1 ) { 
		name = name1 ; 	
	}
	
	this.render = function() {
		var canvas ; 
		var context ; 
		// code for move method goes here
		if ( name[ 0 ] == 'b'){
			//ya se dibujo el fondo
			if ( withBackground ) { 
				canvas = aCanvas [ (currentCanvas+3)%(numberOfCanvas*2) ] ; 
			}
			//estoy dibujando el fondo 
			else
				canvas = document.getElementById ( "staticBass" ) ;
		}
		else {
			// ya se dibujo el fondo
			if ( withBackground ) {
				canvas = aCanvas [ (currentCanvas+2)%(numberOfCanvas*2) ] ;
			}	
			else 
				canvas = document.getElementById ( "staticTreble" ) ;
		} 
			 
		context = canvas.getContext ( "2d" ) ;

			
		var aux = getCirByName ( name ) ; 
		var centerX = aux.x;
		var centerY = aux.y;
		var radius = aux.r;
		var x = aux.x ; 
		var y = aux.y ; 
		
		if ( withBackground == false ) { //( explorador != "firefox") {
			var radgrad2 = context.createRadialGradient( x, y, 15 ,x-30,y-60, 0);
			radgrad2.addColorStop(0, aux.color , .5);
			radgrad2.addColorStop(0.75, "#ffffff" , .5 );
			radgrad2.addColorStop( .5, "#ffffff" , .5);
			context.fillStyle = radgrad2;
		}
		else {
			context.fillStyle = this.color ;
		}	
		

		context.beginPath();
		context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
	 
		//context.fillStyle = radgrad2 ;
		context.fill();
		context.lineWidth = 1;
		context.strokeStyle = "black";
		context.stroke();
		
		context.closePath () ; 
		
	}
	
	
	this.renderProcessingTreble = function() {
		if ( name[0] !='b') {
			var aux = getCirByName ( name ) ; 
			ellipseX = aux.x;
			ellipseY = aux.y;
			ellipseC = aux.color ;
		}
		else {
			ellipseC = "esBajo" ; 
		}
		
	}
}