var loopCont= 0 ; 

var bWrapper ; 	

var mouseX ; 
var mouseY ; 

var explorador ;
var message = new Message ( 10 , 10 , "hello covas") ;

//detect zoom
var prevWidth = window.innerWidth ;  
		
var isPlaying = false ;

var int2 = self.setInterval("isReady()", 1 );
var int3 = self.setInterval("checkZoom()", 500 );
var int1 ;
 
var songPercentage = 0 ;

// Acor vars
var trebleEvent = new Array () ;
var bassEvent = new Array () ;
var cir ; 
var but ; 
var arr ; 
var active = false ; 
var songLength ; 
var ready ; 
var time ;
var flag ;
var buttonColor = "#E0DEDE"; 
var closeColor = "#0000FF" ; 
var openColor = "#CC0000" ; 
var refColor = "#000000" ; 
var showingReference = 0 ; 

// with canvas background or an image 
var canvasBackground = true ;
var withBackground = false ;
var treble1 = "treble1" ;
var bass1 = "bass1" ; 

var currentCanvas = 0 ; 
var first = true ;

var songTempo = 120;
var numberOfCanvas = 2; 
var precisionTimeout = 10 ;

var aCanvas = new Array () ;
var colorC = 127 ;

var loops = new Array ( ) ;  
var swapMode = 2 ; 
