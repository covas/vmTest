function onTBarMouseOut ( e ) {
	tBarMouseOver = false ; 
}

function onTBarMouseOver ( e ) {
	tBarMouseOver = true ;
}

function startDrag ( e ) {	
	if ( notaxnota == 0  ) 
		isDraggingPCircle = true ; 
}

function stopDrag (e) {
	if ( isDraggingPCircle ){
		var t = Math.floor ( actualTime )	 ;  
		gotoTick ( t ) ;  
	}
	isDraggingPCircle = false ;
}

function onClickLoopsBar () {
	if ( creatingLoops)
		alert ( "entro colet") ;
  
}

function onClickBar ( e ) {  
	if ( active && notaxnota == 0 && !creatingLoops ) { 
		var left = document.getElementById ( "trackBar").offsetLeft ; 	
		var w = $('#trackBar').width();
		 
		var percentage = ((e.pageX-left)*100)/w ; 
		var p = document.getElementById ("progress") ;
		p.style.width = percentage+"%" ;
		pCircle.style.left = percentage+"%" ;
		
		var range = endPercentage-startPercentage ; 
		var per = startPercentage+(percentage/100)*range ; 
		
		var time = songLength*(per/100) ;
		var t = Math.floor ( time )	 ;  
		gotoTick ( t ) ; 
	}
}

function onMouseWheel ( e ) { 
	if ( active && notaxnota == 0 && !creatingLoops ) {   
		var d = e.wheelDelta ; 
		var a = pCircle.style.left ;
		a = a.split ( "%" ) ;
		var b = .0
		b = a [ 0 ] ; 
		b ++ ; b -- ; 
		b += d/10000 ;   			
		if ( b < 99 && b >= 0  && !isPlaying) {
			pCircle.style.left = b+"%" ;
			b++ ; 
			progress.style.width = b+"%" ;  
			var time = songLength*(b/100) ;
			var t = Math.floor ( time )	 ;  
			gotoTick ( t ) ;
		} 
	}	 	 
}