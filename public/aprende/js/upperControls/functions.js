function actualizarLoops () {
	for ( var i = 0 ; i < loopCont ; i ++) { 
		var s =  "loops"+i ; 
		var oldPer = loops [ i ] ; 
		var newPer = newPercentage ( oldPer ) ;
		document.getElementById ( s ).style.visibility = "visible" ;
		if ( newPer== -1 ) 
			document.getElementById ( s ).style.visibility = "hidden" ;
		else {
			document.getElementById ( s ).style.left = newPer+"%" ;
		}
	}
}
 
function setSongPercentage ( time1 ) {
	songPercentage = (time1 * 100) / songLength;
}

function newPercentage ( oldPer ) {
	if ( oldPer < startPercentage || oldPer > endPercentage ) 
		return -1 ;
	var dist = oldPer-startPercentage ;
	var range = endPercentage-startPercentage ;  
	var per = (dist/range)*100;
	return per ; 	
}

function createSongSeparator ( ) { 	

	$("#loopsBar" ).append ( "<div id = 'loops"+loopCont+"' class='songSeparator' style = 'left:"+0+"%;'> </div>") ;
	$("#overviewProgressBar" ).append ( "<div id = 'lowerLoops"+loopCont+"' class='lowerSongSeparator' style = 'left:"+songPercentage+"%;'> </div>") ;
	// $("#loopsBar" ).append ( "<div id = '"+loopCont+"' class='songSeparator' style = 'left:"+0+"%;'> </div>") ;
	$("#loops"+loopCont).draggable ({
		axis: 'x' ,
		containment: 'parent',
		stop: function(event, ui) {
			var s = this.id.split( "loops") ;
			var b = 0 ; b++ ; b-- ; 
			b = parseInt ( s [1]) ; 
			var rango = endPercentage-startPercentage ;
			var left = $("#"+this.id).position ().left/$('#trackBar').width()*rango+startPercentage  ;
			document.getElementById ( "lowerLoops"+b ).style.left = left+"%" ;
			// left = parseInt ( left) ;
			loops [ b ] = left ;
		}
	} ) ; 
	
	loops [ loopCont ] = songPercentage ; 
	loopCont ++ ; 
	actualizarLoops () ;
}

function toggleUpperControlVisibility () {
	if ( !isUpperControlsHidden ) {
		isUpperControlsHidden = true ;
		document.getElementById( "upperControls").style.visibility = "hidden" ; 	
	}
	else {
		isUpperControlsHidden = false ;
		document.getElementById( "upperControls").style.visibility = "visible" ;
	}
}

function changeTBarTitle () {
	var left = document.getElementById ( "trackBar").offsetLeft ; 	
	var w = $('#trackBar').width();
	var range = endPercentage-startPercentage ; 
	var percentage = ((mouseX-left)*range)/w+startPercentage ; 
	if ( percentage > 100  )
		percentage = 100 ;
	if ( percentage < 0 ) {
		percentage = 0 ; 
	} 
	tBar.title = percentage.toFixed (2)+"%" ;
}

function pCircleToMouse () {
	if ( active && notaxnota == 0 ) { 
		var left = document.getElementById ( "trackBar").offsetLeft ; 	
		var w = $('#trackBar').width();
		
		var percentage = ((mouseX-left)*100)/w ; 
		if ( percentage > 100  )
			percentage = 100 ;
		if ( percentage < 0 ) {
			percentage = 0 ; 
		}
		var p = document.getElementById ("progress") ;
		p.style.width = percentage+"%" ;
		pCircle.style.left = percentage+"%" ;
		pCircle.title = percentage+"%" ;
		
		var range = endPercentage-startPercentage ; 
		var per = startPercentage+(percentage/100)*range ; 
		
		var time = songLength*(per/100) ;
		actualTime = time ;
		// var t = Math.floor ( time )	 ;  
		// gotoTick ( t ) ; 
	}
}

function togglePlayButton () { 
	if ( active) { 
		var play = document.getElementById ( "playButton") ;
		if ( isPlaying ) {
			stopMidi ( ) ;
			document.getElementById ( "playButton").title = "Reproducir" ; 
			isPlaying = false ;
			play.src = "images/upperControls/play.png" 
		} 
		else {
			startMidi () ; 
			isPlaying = true ; 
			document.getElementById ( "playButton").title = "Pausar" ; 
			play.src = "images/upperControls/pause.png" ; 
		}
	}
}