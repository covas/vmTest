function disableBass () { 
	 	 
	document.app.disableBass () ; 
}

function goToNextNote () {
	
  	document.app.goToNextNote() ; 
} 

function goToPrevNote () {
	
  	document.app.goToPrevNote() ; 
} 

function getDir () { 
	return document.app.getDir() ; 
}

function createLoop () {
	document.app.createLoop() ; 
}


function allNotesOff () {
	
  	document.app.allNotesOff () ; 
} 

function getTickLen ( ) {
	return document.app.getTickLen () ; 
} 


function enableBass () { 
	 	 
	document.app.enableBass () ; 
}

function disableTreble () { 
	 	 
	document.app.disableTreble () ; 
}

function enableTreble () { 
	 	 
	document.app.enableTreble () ; 
}

function sumOctave () {
	document.app.sumOctave () ;
}

function substractOctave () {
	document.app.substractOctave () ;
}

function changePitch ( change ) {
	document.app.changePitch ( change ) ;
}

function gotoTick ( time ) {
	document.app.gotoTick ( time ) ; 
}

function setTempo ( tempo ) {
	songTempo = tempo ; 
    document.app.setTempo ( tempo ) ; 
}

function startMidi () {
	document.app.startMidi () ; 
}

function stopMidi () {
	document.app.stopMidi () ; 
}

function getTime () {
	return document.app.giveTime () ;
}

function check ( note , time ) { 
	return document.app.check ( note ,time ) ;
}

function changeVolume ( trebleVol , bassVol ) {  
	document.app.changeVolume ( trebleVol , bassVol ) ;
}
function changeNotaxNotaVol ( vol ) { 
	document.app.changeNotaxNotaVol ( vol ) ;
} 

function alertTempo () {
	document.app.alertTempo () ;  
}

function getState( note ){
	document.app.getState ( note ) ;
}
  
	
