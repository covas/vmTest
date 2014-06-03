function identifyBrowser () {
	var browser = navigator.userAgent;
	if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){ //Check for Internet Rxplorer
	  explorador = "explorer" ; 
	}else if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)){ //Check for Firefox
		explorador = "firefox" ; 
	}else if (/Chrome[\/\s](\d+\.\d+)/.test(navigator.userAgent)){ //Check for Google chrome
		explorador = "chrome" ; 
	}else if (/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent)){ //Check for Opera
		explorador = "opera" ;
	}else if (browser.toLowerCase().indexOf('safari') > 0){ //Check for Safari
		explorador = "safari" ;
	}
}

function doAlert ( msg , speed ) {
	alert ( "el estado de activated es " + active) 	;
	alert ( msg , speed ) ; 
}
function setVisibility ( id , state ) { 
	var elem = document.getElementById ( id ) ;
  	elem.style.visibility = state ; 	
}


function isZoomed ( ) {
	if ( explorador == "chrome" ) { 	
		// var elem = document.getElementById ( "big_wrapper") ; 
		// var zoom = window.document.width / elem.clientWidth ;
		// if ( zoom != 1 )  
			// return true ; 
		// return false ;
		
	}
	else if ( explorador == "firefox") { 
		 var isZoomed = window.matchMedia('(max--moz-device-pixel-ratio:0.99), (min--moz-device-pixel-ratio:1.01)').matches;
		 if ( isZoomed ) 
		 	return true; 
		 return false ;
	} 
	else if ( explorador == "explorer") { 
		screen = document.frames.screen;
    	var aux = ((screen.deviceXDPI / screen.systemXDPI) * 100).toFixed();
    	if ( aux != 100) 
    		return true ; 
	}
	return false ;
}

function removeElementById ( id ) {
	var elem = document.getElementById ( id ) ; 
  	var parent = elem.parentNode ; 
  	parent.removeChild ( elem ) ; 
}

function checkZoom ( ){
	if ( isZoomed ( ) && prevWidth != window.innerWidth ) { 
		alert ( "Estás fuera de foco! \n\n Si estás experimentando problemas en visualizar el sitio, puede ser porque Tocaacordeon.com no soportua tu nivel actual de zoom. Para solucionar el problema, simplemente presiona CTRL+0 (CMD+0 en Mac) para volver al nivel de zoom por defecto" ) ;
		prevWidth = window.innerWidth ;   
	}
}

function getZoom() {
    var screen;
    screen = document.frames.screen;
    return ((screen.deviceXDPI / screen.systemXDPI) * 100).toFixed();
}