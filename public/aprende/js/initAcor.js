function initCanvas ( id , w , h , a ) { 
	var canvas = document.getElementById( id );
	var context = canvas.getContext("2d");
	context.canvas.width  = w ;
  	context.canvas.height = h;
  	context.globalAlpha = a ; 
}

init = function () {	
	identifyBrowser () ; 
	
	if ( canvasBackground ) {
	  	initCanvas ( "staticTreble" , 120 , 538 , 1 ) ; 
	  	initCanvas ( "staticBass" , 80 , 285 , 1 ) ; 
		removeElementById ( "bassImage") ;
		removeElementById ( "trebleImage") ;  
		// setVisibility ( "staticTreble" , "hidden") ;
		
  	}
  	else { 
  		withBackground = true ; 
  		removeElementById ( "staticBass" ) ;
	  	removeElementById ( "staticTreble" ) ;
	  	setVisibility ( "bassImage" , "visible") ;
	  	setVisibility ( "trebleImage" , "visible") ;  
  	}
  	
	for ( var i = 0 ; i < numberOfCanvas ; i ++ ) { 
		var num = i+1 ; 
		var name = "treble"+num ; 
		initCanvas ( name , 120 , 538 , .8 ) ;
		name = "bass"+num ;
		initCanvas ( name , 80 , 285 , .8 ) ;
	}  		
  		
	// init arrays 
	var buttonColor = "#E1DEDE" ;
	
	but = new Array () ; 
	cir = new Array () ; 
	
	var r = 17  ;
	var startx = -30 ; var starty = -4 ; 
	
	// init buttons  // al final recuerda quitarle stroke para que se vea bien
	// teclado
	for ( var i = 0 ; i < 10 ; i ++ )  {
		var nombre = "n"+i ; 
		button = new Button ( startx+50 , starty+50+(9-i)*50 , r , nombre , 0  , "#ff0000" ) ; 
		but.push ( button ) ; 
		button.render () ;
	}
	
	for ( var i = 10 ; i < 21 ; i ++ )  {
		var nombre = "n"+i ; 
		button = new Button ( startx+90 , starty+22+(20-i)*50 , r , nombre , 0 , "#E1DEDE") ; 
		but.push ( button ) ; 
		button.render () ;
	}
	
	for ( var i = 21 ; i < 31 ; i ++ )  {
		var nombre = "n"+i ; 
		button = new Button ( startx+130 , starty+50+(30-i)*50 , r , nombre , 0 , "#E1DEDE" ) ; 
		but.push ( button ) ; 
		button.render () ;
	}
	
	// init teclado 
	for ( var i = 0 ; i < 10 ; i ++ )  {
		var nombre = "n"+i ; 
		circle = new Circle ( startx+50 , starty+50+(9-i)*50 , r , nombre , 0  , buttonColor ) ; 
		cir.push ( circle ) ; 
		circle.render () ; 
	}
	
	for ( var i = 10 ; i < 21 ; i ++ )  {
		var nombre = "n"+i ; 
		circle = new Circle	( startx+90 , starty+22+(20-i)*50 , r , nombre , 0 , buttonColor) ; 
		cir.push ( circle ) ; 
		circle.render () ; 
	}
	
	
	for ( var i = 21 ; i < 31 ; i ++ )  {
		var nombre = "n"+i ; 
		circle = new Circle ( startx+130 , starty+50+(30-i)*50 , r , nombre , 0 , buttonColor ) ; 
		cir.push ( circle ) ; 
		circle.render () ; 
	}
	
	r = 15 ; 
	// bajos
	// init circles
	var startx2 = 18 ; 
	var starty2 = 18 ; 
	for ( var i = 5 ; i >= 0 ; i -- )  {
		var nombre = "b"+i ; 
		circle = new Circle ( startx2 , starty2+(50*(5-i)) , r , nombre , 0 , buttonColor ) ; 
		cir.push ( circle ) ; 
		circle.render () ; 
	}
	
	for ( var i = 11 ; i >= 6 ; i -- )  {
		var nombre = "b"+i ; 
		circle = new Circle ( startx2+42 , starty2+(50*(11-i)) , r , nombre , 0 , buttonColor ) ; 
		cir.push ( circle ) ; 
		circle.render () ; 
	}
	
	
	// bajo buttons
	// startx2 = 250 ; 
	// starty2 = 250 ;
	for ( var i = 5 ; i >= 0 ; i -- )  {
		var nombre = "b"+i ; 
		button = new Button ( startx2 , starty2+(50*(5-i)) , r , nombre , 0 , buttonColor ) ; 
		but.push ( button ) ; 
		button.render() ;
	}
	// startx2 = 292 ; 
	for ( var i = 11 ; i >= 6 ; i -- )  {
		var nombre = "b"+i ; 
		button = new Button ( startx2+42 , starty2+(50*(11-i)) , r , nombre , 0 , buttonColor ) ; 
		but.push ( button ) ; 
		button.render() ;
	}

	withBackground = true ;
	
}

function init2 () {
	//alert ( length ) ; 
	
}
