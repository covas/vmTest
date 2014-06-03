function readyToPlay () {
	ready = true ;
}

function setLength ( len1 ) {
	songLength = len1
} 

function getButByName ( name ) {
	for ( var i = 0 ; i < but.length ;i ++ )  
		if ( but [ i ].name == name ) 
			return but [ i ] ; 
}


function getCirByNamePos ( name ) {
	for ( var i = 0 ; i < but.length ;i ++ )  
		if ( cir [ i ].name == name ) 
			return i ; 
}

function getButByNamePos ( name ) {
	for ( var i = 0 ; i < but.length ;i ++ )  
		if ( but [ i ].name == name ) 
			return i ; 
}


function getCirByName ( name ) {
	//	alert ( "el nombre es " + name ) ; 
	for ( var i = 0 ; i < cir.length ;i ++ )  
		if ( cir [ i ].name == name ) 
			return cir [ i ] ; 
}

function writeMessage(context, message){
	context.font = "18pt Calibri";
	context.fillStyle = "black";
	context.fillText(message, 10, 25);
}


