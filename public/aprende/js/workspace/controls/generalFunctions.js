function toggleControlsDialog ( id ){
	var sel = '#'+id ; 
	if ( $( sel ).dialog ( "isOpen" ) ) 
		 $(sel).dialog ( "close" )
	else 
		 $(sel).dialog ( "open" )
}

function toggleEditLoops () {
	creatingLoops = !creatingLoops ;
}

function validateForm () {
	var dist= 0 ; 
	var aux = posTono ;
	var nTono ; 
	
	for ( var i = 0 ; i < document.tonosForm.length ; i ++ ) 
		if ( document.tonosForm [ i ].checked ) {
			nTono = document.tonosForm [ i ].title  ;
			var nPos ; 
			for ( var j = 0 ; j < 12 ; j++  )
				if ( tonos [ j ] == nTono ) 
					nPos = j ; 
			dist = nPos-posTono  ;
		} 
	tono +=dist ;
		
	if ( tono >= 38 || tono <= -36 || notaxnota == 1 ) {
		
		tono -= dist ;

		
		var form = document.tonosForm ; 
		for ( var i = 0 ; i < form.length ; i ++ ) {
			form [ i ].checked = false ;
			if ( form [ i ].title == checkedTitle) 
			 	form [ i ].checked = true ; 
		}
		$( "#format").buttonset ( ) ;
		
		if ( notaxnota  == 1 ) {
			alert ( "No se puede cambiar el tono mientras que se muestra el audio nota por nota" ) ; 
		} 
		else if ( tono > 0 ) { 
			alert ( "La aplicacion no puede llegar a tonos tan altos")  ;
		}
		else { 
			alert ("La aplicacion no puede llegar a tonos tan bajos")
		}
	}
	else { 	 
		checkedTitle = nTono ;
		stopMidi ( ) ; 
		posTono = posTono+dist ;
		changePitch ( dist ) ; 
	
		if ( isPlaying ) 
			startMidi ( ) ;
	}
	
	
}

function validateForm2 () {
	for ( var i = 0 ; i < document.checkboxForm.length ; i ++ ) 
		if ( document.checkboxForm [ i ].checked ) 
			alert ( document.checkboxForm [ i ].title ) ; 
}

function validateForm3 () {
 	alert ( "validate form 3 ") ; 
}

function setnotaxnota ( val ) { 
	if ( val == 1 && notaxnota == 0 )
		changeNotaxNotaVol ( $( "#nVolume" ).slider( "option", "value" ) ) ;
	notaxnota = val ;
	
}

