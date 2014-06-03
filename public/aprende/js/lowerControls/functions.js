function setStartandEndPer ( ) {
	 var len = $('#zoomBar').css ( "width" )  ; 
	 len = len.split ( "px" ) ; 
	 var l = .0 ; 
	 l = len [ 0  ] ; 
	 l ++ ; l-- ; 
	 
	 var total = $ ("#overviewProgressBar").css ( "width") ; 
	 total = total.split ( "px")  ; 
	 var t = .0 ;
	 t = total [ 0 ] ; 
	 t ++ ; t -- ;
	 
	 var percentage = ((l*100)/t) ;
	 
	 var left = $( "#zoomBar").css ( "left" )  ;
	 left = left.split ("px") ;
	 var izq = .0 ; 
	 izq = left [ 0 ] ; 
	 izq ++ ; izq -- ; 

	 var izquierda = ( izq*100)/t  ;
	 
	 startPercentage = izquierda ;
	 endPercentage = percentage+startPercentage;
	 
	 // alert ( "per es " + startPercentage.toFixed (0) + " izq es " + endPercentage.toFixed(0) ) ;

	 actualizarLoops () ;	 
	 $ ("#startPercentage").html ( startPercentage.toFixed(0)+"%") ;
	 $ ("#endPercentage").html ( endPercentage.toFixed(0)+"%") ;
} 
