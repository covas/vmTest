function Button ( x , y , r , name , mouseDown , color ) {
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
	this.mouseover1 = function () { 
		document.body.style.cursor = "pointer";
		// alert ( name ) ;		
	}
	
	this.render = function() {
	
		var kin = new Kinetic_2d("treble1");	
		var canvas = kin.getCanvas();
		var context = kin.getContext();
 
 		if ( name [ 0 ] == 'b') {
 			kin = new Kinetic_2d("bass1");	
			canvas = kin.getCanvas();
			context = kin.getContext();
 		}
 
		kin.setDrawStage(function(){

		kin.beginRegion();
			
		var aux = getButByName ( name ) ; 
		var centerX = aux.x;
		var centerY = aux.y;
		var radius = aux.r;
		var x = aux.x ; 
		var y = aux.y ; 
			
		context.fillStyle = "rgba(0, 0, 200, 0)" ;
	

		context.beginPath();
		context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
	 
		context.lineWidth = .000001;
		context.strokeStyle = "gray";
		context.stroke();
		
		context.closePath () ; 
			
		kin.addRegionEventListener("mousedown", function(){

			var mousePos = kin.getMousePos();
			
			// usamos mousedown para que no entre varias veces a la funcion show
			
			// if ( mouseDown == 0  ) {
				
				// show ( aux.name ) ; 
				 
			// }
			// mouseDown = 1 ; 

		});
		kin.addRegionEventListener("mouseup", function(){
			mouseDown = 0 ; 
			
		});
		kin.addRegionEventListener("mouseover", aux.mouseover1 );
		kin.addRegionEventListener("mouseout", function(){
			document.body.style.cursor = "default";
			mouseDown = 0 ; 
		});

		kin.closeRegion();
		});
	}
	
}
