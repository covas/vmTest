function initUpperControls () {
    pBar = document.getElementById ( "progressBar" ) ;
	tBar = document.getElementById ( "trackBar") ; 
	progress = document.getElementById ( "progress") ;
	pCircle = document.getElementById ( "progressCircle") ;
	
	pCircle.style.left = "0%" ; 
	progress.style.left = "0%" ; 
	
	pCircle.addEventListener ( "mousedown", startDrag , false ) ; 
	tBar.addEventListener ( "click" , onClickBar , false ) ;
	
	    	
	$('#loopsBar').mousedown(function(event) {
		if ( creatingLoops ) {
		    switch (event.which) {
		        case 1:
		            alert('Left mouse button pressed');
		            break;
		        case 2:
		            alert('Middle mouse button pressed');
		            break;
		        case 3:
		            alert('Right mouse button pressed');
		            break;
		        default:
		            alert('You have a strange mouse');
		    }
		}
	});
}
    	
