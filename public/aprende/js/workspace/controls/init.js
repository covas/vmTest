function initControlDialogs () { 
	$('#navegador').dialog( {
		 position: [ 7 , 39 ] ,
		 containment: '#workspace',
		 show: 'fade' ,
		 hide: 'fade' ,
		 autoOpen: false , 
		 height: 384,
		 width:202
		 		,resizeStop: function ( event , ui) {
		 	//getter
			var position = $( "#navegador" ).dialog( "option", "width" );
			// alert ( position [ 0 ] +  " " + position [ 1 ]) ;
			alert (  position ) ;
		 }
	}) ;
	
	$('#loopControls').dialog( {
		disabled: true,
		position: [ 7 , 252 ], 
		show: 'fade' ,
		hide: 'fade' ,
		autoOpen: false,
		height: 252
	}) ;
	
	$('#tempo').dialog( {
		 position: [ 862 , 39 ] ,
		 containment: '#workspace',
		 show: 'fade' ,
		 hide: 'fade' ,
		 autoOpen: false , 
		 height: 70, 
		 width:405,
		 resizable:false

	}) ;
	
	$('#volumen').dialog( {
		 position: [ 966 , 120 ] ,
		 containment: '#workspace',
		 show: 'fade' ,
		 hide: 'fade' ,
		 autoOpen: false , 
		 height: 153,
		 resizable:false

	}) ;
	
	$('#soundControls').dialog( {
		 position: [ 1016 , 285 ] ,
		 containment: '#workspace',
		 show: 'fade' ,
		 hide: 'fade' ,
		 autoOpen: false , 	
		 height: 196,
		 width: 250, 
		 // resizable: false , 
		 resizeStop: function(event, ui) { 
		 	alert ( $('#soundControls').dialog( "option", "height" )	) ;	
		 }

	}) ;
	
	$('#inf_notas').dialog( {
		 position: [ 10 , 50 ] ,
		 containment: '#workspace',
		 show: 'fade' ,
		 hide: 'fade' ,
		 autoOpen: false , 
		 height: 400
	}) ;

	$('#ayuda').dialog( {
		 position: [ 10 , 50 ] ,
		 containment: '#workspace',
		 show: 'fade' ,
		 hide: 'fade' ,
		 autoOpen: false , 
		 height: 400
	}) ;

	$('#conf_vista').dialog( {
		 position: [ 10 , 50 ] ,
		 containment: '#workspace',
		 show: 'fade' ,
		 hide: 'fade' ,
		 autoOpen: false , 
		 height: 400
	}) ;

	$('#l_atajos').dialog( {
		 position: [ 10 , 50 ] ,
		 containment: '#workspace',
		 show: 'fade' ,
		 hide: 'fade' ,
		 autoOpen: false , 
		 height: 400
	}) ;

	initNavegador () ;
	initSoundControls() ;
	initLoopControls() ;
	initTempoControls () ;
	initVolumeControls (); 
}

function initNavegador ( ) {
	$('#format3').buttonset();
	$( "#accordion2" ).accordion({
    	height: 300,
    	autoHeight: false,
    	change: function ( event , ui ) {
			// cambio la configuracion de los ciclos
		}
    });
    
    $( "#accordion3" ).accordion({
    	height: 300,
    	autoHeight: false,
    	change: function ( event , ui ) {
			// cambio la configuracion de los ciclos
		}
    });
    
    $('#naSlider').slider({
		// range: "max",
		value: 10,
		min: 1,
		max:100,
		slide: function(event, ui) {
			//var per = (ui.value*100)/ui.max ;
			var max = $( "#naSlider" ).slider( "option", "max" ) ;
			var per = (ui.value*100)/max ;
			per--;  
			$('#naText').html ( ui.value*100/max ).css ( "left" , per+"%" ) ; 
			$('#naCiclo').html ( "Reproducir las " + ui.value*100/max + " anteriores").css ( "left" , per+"%" ) ;
		},
		stop: function(event, ui) { 
			// change tempo 
			
		}
	}) ;
	
	$('#paSlider').slider({
		// range: "max",
		value: 10,
		min: 1,
		max:100,
		slide: function(event, ui) {
			//var per = (ui.value*100)/ui.max ;
			var max = $( "#paSlider" ).slider( "option", "max" ) ;
			var per = (ui.value*100)/max ;
			per--;  
			$('#paText').html ( ui.value*100/max ).css ( "left" , per+"%" ) ; 
			$('#paCiclo').html ( "Reproduccion de un " + ui.value*100/max +"%" ).css ( "left" , per+"%" ) ;
		},
		stop: function(event, ui) { 
			// change tempo 
			
		}
	}) ;
	
	$('#pnSlider').slider({
		// range: "max",
		value: 10,
		min: 1,
		max:100,
		slide: function(event, ui) {
			//var per = (ui.value*100)/ui.max ;
			var max = $( "#pnSlider" ).slider( "option", "max" ) ;
			var per = (ui.value*100)/max ;
			per--;  
			$('#pnText').html ( ui.value*100/max ).css ( "left" , per+"%" ) ; 
			$('#pnCiclo').html ( "Reproducir las " + ui.value*100/max + " notas posteriores").css ( "left" , per+"%" ) ;
		},
		stop: function(event, ui) { 
			// change tempo 
			
		}
	}) ;
	
	$('#ppSlider').slider({
		// range: "max",
		value: 10,
		min: 1,
		max:100,
		slide: function(event, ui) {
			//var per = (ui.value*100)/ui.max ;
			var max = $( "#ppSlider" ).slider( "option", "max" ) ;
			var per = (ui.value*100)/max ;
			per--;  
			$('#ppText').html ( ui.value*100/max ).css ( "left" , per+"%" ) ; 
			$('#ppCiclo').html ( "Reproduccion de un " + ui.value*100/max +"%").css ( "left" , per+"%" ) ;
		},
		stop: function(event, ui) { 
			// change tempo 
			
		}
	}) ;
}

function initVolumeControls () {
	
	$('#tVolume').slider({
		range: "max",
		value: 100,
		min: 0,
		max: 127,
		stop: function(event, ui) { 
			var trebleVol = ui.value ; 
			var bassVol = $( '#bVolume' ).slider( "option", "value" );
			changeVolume ( trebleVol , bassVol ) ; 
		}
	}) ;
	
	$('#bVolume').slider({
		range: "max",
		value: 100,
		min: 0,
		max: 127,
		stop: function(event, ui) { 
			var trebleVol = $( '#tVolume' ).slider( "option", "value" );
			var bassVol = ui.value ; 
			changeVolume ( trebleVol , bassVol ) ; 
		}
	}) ;
	
	$('#nVolume').slider({
		range: "max",
		value: 30,
		min: 0,
		max: 99,
		stop: function(event, ui) { 
			if ( !isPlaying ) 	
				changeNotaxNotaVol ( ui.value)
		}
	}) ;
}

function initTempoControls () {
    $('#tempoSlider').slider({
		range: "max",
		value: 100,
		min: 1,
		max: 250,
		slide: function(event, ui) {
			//var per = (ui.value*100)/ui.max ;
			var max = $( "#tempoSlider" ).slider( "option", "max" ) ;
			var per = (ui.value*100)/max ;
			per--;  
			$('#tempoText').html ( ui.value*250/max+"%" ).css ( "left" , per+"%" ) ; 
		},
		stop: function(event, ui) { 
			// change tempo 
			setTempo ( ui.value*1.2 ) ; 
		}
	}) ;
}

function initLoopControls () {
	
	
	$( "#accordion" ).accordion({
    	height: 290,
    	autoHeight: false,
    	change: function ( event , ui ) {
			// cambio la configuracion de los ciclos
		}
    });
	
	$('#testSlider2').slider({
		range: "max",
		value: 37,
		min: 1,
		max: 700
		// slide: function( event, ui ) {
			// alert ( "entro"	) ;
			// // $( "#amount" ).val( "$" + ui.value );}
	}) ;
	
	$('#testButton, #testButton2').button() ;
	$('#testButton' ).bind ( "click" , function (e) {
	  alert ( "test") ;
	})
	$('#format2').buttonset();
	
	$('#notesSlider').slider({
		// range: "max",
		value: 10,
		min: 1,
		max:100,
		slide: function(event, ui) {
			//var per = (ui.value*100)/ui.max ;
			var max = $( "#notesSlider" ).slider( "option", "max" ) ;
			var per = (ui.value*100)/max ;
			per--;  
			$('#notesText').html ( ui.value*100/max ).css ( "left" , per+"%" ) ; 
			$('#nporCiclo').html ( "Notas por ciclo: " + ui.value*100/max ).css ( "left" , per+"%" ) ;
		},
		stop: function(event, ui) { 
			// change tempo 
			
		}
	}) ;
	
	$('#perSlider').slider({
		// range: "max",
		value: 10,
		min: 1,
		max:100,
		slide: function(event, ui) {
			//var per = (ui.value*100)/ui.max ;
			var max = $( "#perSlider" ).slider( "option", "max" ) ;
			var per = (ui.value*100)/max ;
			per--;  
			$('#perText').html ( ui.value*100/max ).css ( "left" , per+"%" ) ; 
			$('#pporCiclo').html ( "Porcetaje por ciclo: " + ui.value*100/max ).css ( "left" , per+"%" ) ;
		},
		stop: function(event, ui) { 
			// change tempo 
			
		}
	}) ;
	
}

function initSoundControls () {
	$( "#format" ).buttonset({
	}); 
	
}
