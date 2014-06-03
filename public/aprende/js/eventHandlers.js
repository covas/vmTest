// tooltip follow mouse http://jsfiddle.net/xJSMu/
function addListeners () {
	//upper controls
	 
	bWrapper.addEventListener ("mousemove" , getMouseXY , false ) ; 
	bWrapper.addEventListener ( "mouseup", stopDrag , false ) ; 
	bWrapper.addEventListener (  "mousewheel" , onMouseWheel , false )  ; 
}

function getMouseXY ( e ) {
	mouseX = e.pageX ; 
	mouseY = e.pageY ;  
}


