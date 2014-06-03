function generalChangePitch ( pC ) {
	stopMidi( ) ;
	var aux = posTono ; 
	
	tono += pC	 ;
	if ( tono >= 38 || tono <= -36 || notaxnota  == 1) {
		if ( notaxnota ==1  ) { 
			alert ( "No se puede cambiar el tono mientras que se muestra el audio nota por nota" ) ;
		}
		else if (tono > 0 )
			alert ( "La aplicacion no puede llegar a tonos tan altos" )  ;
		else 
			alert ( "La aplicacion no puede llegar a tonos tan bajos" )  ;
		
		tono -= pC ; 
		if ( isPlaying ) 
			startMidi ( ) ;
		return ;
	} 

	

	posTono = (posTono+pC)%12 ;
	if (  posTono < 0 ) 
		posTono = posTono+12;

	
	var radioObj = document.tonosForm ;
	var radioLength = radioObj.length ;

	for (var i=0; i < radioLength ; i++) {
	 	radioObj[i].checked = false;
		if ( radioObj [i].title == tonos [ posTono ] )
			radioObj [ i ].checked = "checked" ; 
	}
	
	$( "#format").buttonset ( ) ;
	
	checkedTitle = tonos [ posTono ] ;
	changePitch ( pC ) ;

	if ( isPlaying )
		startMidi ( ) ;
}
