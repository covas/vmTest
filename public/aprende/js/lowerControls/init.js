function  initLowerControls () {
	$('#zoomBar').draggable ({
		axis: 'x' ,
		containment: 'parent',
   		stop: function(event, ui) {
   			setStartandEndPer ( ) ;
   		}
	}) ;
	
	$('#zoomBar').resizable ({
		containment: 'parent',
		handles: 'e, w',
   		stop: function(event, ui) {
			setStartandEndPer () ; 
		}
	}) ;
}

 
