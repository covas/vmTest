<!DOCTYPE html>
<html lang="es">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
        <title>Aprende</title>
        <link rel="stylesheet" href="css/general.css" type="text/css">
        <link rel="stylesheet" href="css/controls.css" type="text/css">
        <link rel="stylesheet" href="css/workspace.css" type="text/css">
        <link rel="stylesheet" href="css/upperControls.css" type="text/css">
        <link rel="stylesheet" href="css/lowerControls.css" type="text/css">
        <link rel="stylesheet" href="css/ui-style.css" type="text/css">
        <!-- <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css"
        rel="stylesheet" type="text/css"/>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>-->
        <!-- frameworks -->
        <script src="js/frameworks/kineticslib.js"></script>
        <script src="js/frameworks/jquery.min.js"></script>
        <script src="js/frameworks/jquery-ui.min.js"></script>
        <script src="js/frameworks/excanvas.compiled.js"></script>
        <!-- classes -->
        <script src="js/classes/Circle.js">
            
        </script>
        <script src="js/classes/Button.js">
            
        </script>
        <script src="js/classes/Message.js">
            
        </script>
        <!-- Upper Controls -->
        <script src="js/upperControls/eventHandlers.js"></script>
        <script src="js/upperControls/variables.js"></script>
        <script src="js/upperControls/functions.js"></script>
        <script src="js/upperControls/init.js"></script>
        <!-- Lower Controls -->
        <script src="js/lowerControls/eventHandlers.js"></script>
        <script src="js/lowerControls/variables.js"></script>
        <script src="js/lowerControls/init.js"></script>
        <script src="js/lowerControls/functions.js"></script>
        <!-- Workspace -->
        <script src="js/workspace/controls/generalFunctions.js"></script>
        <script src="js/workspace/controls/init.js"></script>
        <script src="js/workspace/controls/eventHandlers.js"></script>
        <script src="js/workspace/controls/variables.js"></script>
        <!-- General -->
        <script src="js/variables.js"></script>
        <script src="js/Acorfunctions.js"></script>
        <script src="js/generalFunctions.js"></script>
        <script src="js/initAcor.js"></script>
        <script src="js/appFunctions.js"></script>
        <script src="js/eventHandlers.js"></script>
        <!-- google analytics -->
		<script type="text/javascript">

		  var _gaq = _gaq || [];
		  _gaq.push(['_setAccount', 'UA-34007954-1']);
		  _gaq.push(['_trackPageview']);

		  (function() {
			var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		  })();

		</script>
        <script>
            function activate() {
                active = true;
            }

            function isReady() {
                if(isDraggingPCircle) pCircleToMouse();
                if(active) {
                    removeElementById("loader");
                    init();
                    int2 = window.clearInterval(int2);
                    //int1 = self.setInterval("enterFrame()", 10 );
                    enterFrame();
                }
            }

            function press(e) {
                if(window.event) // IE // chrome // opera
                {
                    keynum = e.keyCode;
                    if(keynum == 68) {
                        alert(" contador es " + contador);
                        var masGrande = 0;
                        var respuesta = 0;
                        for(var j = 0; j < 62; j++) {
                            if(trebleEvent[j].length > masGrande) {
                                masGrande = trebleEvent[j].length;
                                respuesta = j;
                            }
                        }
                        alert("el mas grande es " + respuesta + " con " + masGrande);
                    }
                    if ( keynum ==  83 ) {
                    	swapNames () ; 
                    }
                    if(keynum == 80) {
                        processingStyle++;
                        processingStyle %= 4;
                        alert(processingStyle);
                    }
                    if(keynum == 72) {
                        createSongSeparator();
                    }
                    if ( keynum == 82 ) {
                    	rotateButtons ( ) ; 
                    }
                    if(keynum == 37) {
                        alert(pCircle.style.left)
                        if(!isPlaying) goToPrevNote();
                    }
                    if(keynum == 38) {
                        if(!isPlaying) goToNextNote();
                    }
                    if(keynum == 65) {
                        speedDown();
                    }
                    if(keynum == 66) {
                        speedUp();
                    }
                    if ( keynum == 86 ) {
                    	showingReference = showingReference == 1? 0 : 1  ; 
                    }
                    if(keynum == 67) {
                        var boton = getCirByName("b10");
                        if(boton == undefined) alert("barro");
                        boton.setColor("#0000ff");
                    }
                    if(keynum == 32) {
                        togglePlayButton();
                    }
                } else if(e.which) // Netscape/Firefox
                {
                    keynum = e.which;
                    alert(keynum);
                    if(keynum == 32) {
                        togglePlayButton();
                    }
                    if(keynum == 37) speedDown();
                    if(keynum == 38) cir[1].render("#00ff00");
                    if(keynum == 39) cir[2].render("#00ff00");
                }
            }

			function showReference ( ) {
				if ( showingReference == 1 ) {
					var boton = getCirByName ("n0") ; 
					boton.setColor ( refColor ) ;
					boton = getCirByName ("b6") ; 
					boton.setColor ( refColor) ;
				}
			}

            function release(e) {}
            window.requestAnimFrame = (function () {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function ( /* function */ callback, /* DOMElement */ element) {
                    window.setTimeout(callback, 1);
                };
            })();

            function addTrebleEvent(note, tick) {
                trebleEvent[note].push(tick);
            }

            function addBassEvent(note, tick) {
                bassEvent[note].push(tick);
            }

            function isNoteOn(note) {
                var e = trebleEvent[note].length - 1;
                var s = 0,
                    pos = -1,
                    m;
                while(s <= e && pos == -1) {
                    m = (s + e) / 2;
                    m = parseInt(m);
                    if((m % 2) != 0) m--;
                    if(trebleEvent[note][m] <= time && time < trebleEvent[note][m + 1]) pos = m;
                    else if(time < trebleEvent[note][m]) e = m - 1;
                    else if(time >= trebleEvent[note][m + 1]) s = m + 2;
                }
                if(pos != -1) return true;
                return false;
            }
						
            function isNoteOnBass(note) {
                var e = bassEvent[note].length - 1;
                var s = 0,
                    pos = -1,
                    m;
                while(s <= e && pos == -1) {
                    m = (s + e) / 2;
                    m = parseInt(m);
                    if((m % 2) != 0) m--;
                    if(bassEvent[note][m] <= time && time < bassEvent[note][m + 1]) pos = m;
                    else if(time < bassEvent[note][m]) e = m - 1;
                    else if(time >= bassEvent[note][m + 1]) s = m + 2;
                }
                if(pos != -1) return true;
                return false;
            }

			function swapNames () {
				for ( var i = 0 ; i < 26 ; i ++ ) { 
					var name = "n" , name2= "n"  , tmp , old , nue ;  
					if ( i == 5 ) i+=5 ; 
					if ( i == 15 ) i+= 6 ; 
					if ( i < 10 ) tmp =9-i ;  
					else if ( i < 21 ) tmp = 30-i  ; 
					else tmp = 51-i; 
					name2 +=tmp ; 
					name += i ; 
					swap ( name , name2 ) ;   	
				}
				for ( var i = 0 ; i < 9 ; i ++ ) { 
					var name = "b" , name2= "b"  , tmp , old , nue ; 
					if ( i == 4 ) i += 2 ;				
					if ( i < 6 ) tmp =5-i ;  
					else tmp = 17-i  ; 
					name2 +=tmp ; 
					name += i ; 
					swap (name, name2) ; 	
				}
			}
			
			function swap ( name , name2 ){
				var boton = getCirByName ( name ) , button = getButByName ( name ) ; 
				var botonPos = getCirByNamePos  ( name ) , buttonPos = getButByNamePos  ( name )  ;
				var boton2 = getCirByName ( name2 ) , button2 = getButByName ( name2 ) ; 
				var botonPos2 = getCirByNamePos  ( name2 ) , buttonPos2 = getButByNamePos  ( name2 )  ;  
				cir [botonPos].name =  name2  ;
				but [buttonPos].name =  name2  ;  
				button.setName ( name2 ) ;
				button.render () ;  
				boton.setName ( name2 ) ; 
				cir [botonPos2].name =  name  ;
				but [buttonPos2].name =  name  ;  
				button2.setName ( name ) ;
				button2.render () ;   
				boton2.setName ( name ) ; 
			}
			function rotateButtons () {
				for ( var i = 0 ; i < 10 ; i ++ ) { 
					var name2 = "n" , name ="n" ;
					name += i ;
					var tmp = (10-i)+11+9 ;  
					name2 += tmp ;
					swap ( name , name2 ) ;
				}
				for ( var i = 10 ; i < 15 ; i ++ ) {
					var  tmp = 30-i  ;
					var name = "n" , name2 = "n" ; 
					name +=i ; 
					name2 +=tmp ; 
					swap ( name , name2 ) ; 
				}
				for ( var i = 0 ; i < 6 ; i ++ 	) {
					var name = "b" , name2 = "b" ;
					name += i ; 
					var tmp = (6-i)+5  ; 
					name2+=tmp ; 
					swap ( name , name2 ) ; 
				}
				var trebleLeft = $("#staticTreble").css('left')
				if ( trebleLeft == "54%") {
					$("#staticTreble").css ( {left: '36%'}) ;
					$("#treble1").css ( {left: '36%'}) ;
					$("#treble2").css ( {left: '36%'}) ;
					$("#staticBass").css ( {left: '59%'}) ;
					$("#bass1").css ( {left: '59%'}) ; 
					$("#bass2").css ( {left: '59%'}) ;  
				}
				else {
					$("#staticTreble").css ( {left: '54%'}) ;
					$("#treble1").css ( {left: '54%'}) ;
					$("#treble2").css ( {left: '54%'}) ;
					$("#staticBass").css ( {left: '34%'}) ;
					$("#bass1").css ( {left: '34%'}) ; 
					$("#bass2").css ( {left: '34%'}) ;  
				}
			}
			
            function enterFrame() {
                if(isPlaying && notaxnota == 1) allNotesOff();
                time = getTime();
                //teclado
                for(var i = 0; i < 62; i++) {
                    var res = isNoteOn(i);
                    var name = "n";
                    var tmp = Math.floor(i / 2);
                    name += tmp;
                    var boton = getCirByName(name);
                    if(res == true) {
                        if((i % 2) == 0) {
                            i++;
                            boton.setColor(closeColor);
                        } else boton.setColor(openColor);
                    } else {
                        boton.setColor(buttonColor);
                    }
                }
                //bajo
                for(var i = 0; i < 24; i++) {
                    var res = isNoteOnBass(i);
                    var name = "b";
                    var tmp = Math.floor(i / 2);
                    name += tmp;
                    var boton = getCirByName(name);
                    if(res == true) {
                        if((i % 2) == 0) {
                            i++;
                            boton.setColor(closeColor);
                        } else boton.setColor(openColor);
                    } else {
                        boton.setColor(buttonColor);
                    }
                }
                showReference () ;
                songPercentage = (time * 100) / songLength;
                pCircle.title = songPercentage.toFixed(2) + "%";
                document.getElementById("console").innerHTML = creatingLoops;
                tBar.title = songPercentage.toFixed(2) + "%";
                if(tBarMouseOver) {
                    changeTBarTitle();
                }
                if(!isDraggingPCircle) {
                    if(songPercentage >= endPercentage || songPercentage < startPercentage) {
                        var maximo = startPercentage;
                        for(var i = 0; i < loopCont; i++)
                        if(loops[i] > maximo && loops[i] < endPercentage) maximo = loops[i];
                        gotoTick(Math.floor((maximo / 100) * songLength));
                    }
                    var flagSeparator = false;
                    for(var i = 0; i < loopCont; i++) {
                        if(loops[i] - .05 < songPercentage && songPercentage < loops[i]) {
                            var mayor = startPercentage;
                            for(var j = 0; j < loopCont; j++) {
                                if(loops[j] < loops[i] && loops[j] > mayor) mayor = loops[j];
                            }
                            flagSeparator = true;
                            gotoTick(Math.floor((mayor / 100) * songLength));
                            break;
                        }
                    }
                    var per = songPercentage;
                    if(flagSeparator) per = mayor;
                    var range = endPercentage - startPercentage
                    var newPercentage = (per - startPercentage) * 100 / range;
                    if(newPercentage > 0) {
                        if(per <= endPercentage) {
                            document.getElementById("progress").style.width = "" + newPercentage + "%";
                            document.getElementById("progressCircle").style.left = "" + newPercentage + "%";
                        } else {
                            document.getElementById("progress").style.width = "100%";
                            document.getElementById("progressCircle").style.left = "100%";
                        }
                    } else {
                        document.getElementById("progress").style.width = "0%";
                        document.getElementById("progressCircle").style.left = "0%";
                    }
                    var tmp = per / 1.007;
                    document.getElementById("overviewPCircle").style.left = "" + tmp + "%";
                } else if(isDraggingPCircle) {
                    pCircleToMouse();
                }
                paint();
                requestAnimFrame(enterFrame);
            }

            function show(name) {
                stopMidi();
                isPlaying = false;
            }

            function paint() {
                var treble_c = aCanvas[(currentCanvas + 2) % (numberOfCanvas * 2)];
                var bass_c = aCanvas[(currentCanvas + 3) % (numberOfCanvas * 2)];
                var treble_ctx = treble_c.getContext('2d');
                var bass_ctx = bass_c.getContext('2d');
                treble_ctx.canvas.width = treble_ctx.canvas.width;
                bass_ctx.canvas.width = bass_ctx.canvas.width;
                for(var i = 0; i < cir.length; i++)
                	if(cir[i].color == openColor || cir[i].color == closeColor || cir[i].color == refColor)
                		cir[i].render();
                var treble2, treble2_ctx;
                var bass2, bass2_ctx;
                for(var i2 = 0; i2 < numberOfCanvas * 2; i2 += 2) {
                    treble2 = aCanvas[i2];
                    bass2 = aCanvas[i2 + 1];
                    if(currentCanvas == i2) {
                        treble2_ctx = treble2.getContext('2d');
                        bass2_ctx = bass2.getContext('2d');
                        treble2_ctx.drawImage(treble_c, 0, 0);
                        bass2_ctx.drawImage(bass_c, 0, 0);
                        treble2.style.visibility = 'visible';
                        bass2.style.visibility = 'visible';
                    } else {
                        treble2.style.visibility = 'hidden';
                        bass2.style.visibility = 'hidden';
                    }
                }
                currentCanvas += 2;
                currentCanvas %= (numberOfCanvas * 2);
                aCanvas.length = 0;
                for(var i = 0; i < numberOfCanvas; i++) {
                    var num = i + 1;
                    var treble3 = document.getElementById("treble" + num);
                    var bass3 = document.getElementById("bass" + num);
                    aCanvas.push(treble3);
                    aCanvas.push(bass3);
                }
            }

            function getfocus() {
                document.getElementById("console").focus();
            }
            window.onbeforeunload = function () {
                stopMidi();
                allNotesOff();
                active = false;
            }

            function testAlert(msg, msg2) {
                alert(msg + " " + msg2);
            }
            window.onload = onLoad;

            function onLoad() {
                //avoid selecting text and images
                document.onmousedown = function () {
                    return false;
                }
                bWrapper = document.getElementById("big_wrapper");
                initUpperControls();
                initLowerControls();
                addListeners();
                identifyBrowser();
                initControlDialogs();
                var workspace = document.getElementById("workspace");
                for(var i = 0; i < numberOfCanvas; i++) {
                    var num = i + 1;
                    workspace.innerHTML += "<canvas id='treble" + num + "' class='default treble' style='z-index: 2 ; ' ></canvas>";
                    workspace.innerHTML += "<canvas id='bass" + num + "' class='default bass' style='z-index: 2 ; ' ></canvas>";
                }
                aCanvas.length = 0;
                for(var i = 0; i < numberOfCanvas; i++) {
                    var num = i + 1;
                    var treble = document.getElementById("treble" + num);
                    var bass = document.getElementById("bass" + num);
                    aCanvas.push(treble);
                    aCanvas.push(bass);
                }
                for(var i = 0; i < 62; i++)
                trebleEvent[i] = new Array();
                for(var i = 0; i < 24; i++)
                bassEvent[i] = new Array();
                if(isZoomed()) {
                    alert("Estás fuera de foco! \n\n Si estás experimentando problemas en visualizar el sitio, puede ser porque Tocaacordeon.com no soportua tu nivel actual de zoom. Para solucionar el problema, simplemente presiona CTRL+0 (CMD+0 en Mac) para volver al nivel de zoom por defecto");
                }
                if(!navigator.javaEnabled()) alert("Debes instalar o habilitar java para utilizar la aplicación");
            };
        </script>
    </head>
    
    <body id="Body" onkeyup="release ( event ) ;" onkeydown="press( event );">
        <div id="big_wrapper" onclick="getfocus();">
            <applet code="MyApplet.class" archive="player.jar" name="app" width="0"
            height="0">
                <PARAM NAME="fileName" VALUE="midis/<?php 
                echo$_GET[ 'f' ];
                ?>.mid">
            </applet>
            <div id="upperControls">
                <div class="playbtn">
                    <img title="Reproducir" onclick=" togglePlayButton ()" id="playButton"
                    src="images/upperControls/play.png" />
                </div>
                <div id="percentageDiv">
                    <p class="percentage" id="startPercentage">0%</p>
                </div>
                <div onmouseout="onTBarMouseOut ()" onmouseover="onTBarMouseOver ()" id="trackBar">
                    <div id="progressBar" class="default bordered"></div>
                    <div id="progress" class="default"></div>
                    <div id="loopsBar">
                        <!-- <div class=" startLoop"> </div>	
					<div class = "endLoop"> </div>	
					<div class = "startLoop" style="left:60%;"> </div> --></div>
                    <!-- <div title=" 5%" id=" progressCircle"></div> -->
                    <img title="5%" id="progressCircle" src="images/upperControls/progress.png"
                    />
                </div>
                <div id="percentageDiv" style="margin-right:.8%;">
                    <p class="percentage" id="endPercentage">100%</p>
                </div>
            </div>
            <!-- end upper controls -->
            <div id="workspace">
                <!-- Control dialogs -->
                <div title="Navegador" id="navegador">
                    <!-- para evitar que se seleccionen con el tab las opciones de los checkbox
                    (debe ir de 1)-->
                    <input type="button" class="hiddenButton" />
                    <div style="margin-top:-1em; width:95%; left:0%; position:absolute;" class="navegador">
                        <p class="fontType" style="float:left; margin-right: .4em;">Ciclos</p>
                        <img title="Sumar una octava" style="margin-top:.2em; cursor:pointer ; height:1em; float:left ; "
                        onclick="alert ( 'sum oct')" src="images/lowerControls/plus.png" />
                        <img title="Sumar una octava" style="margin-top:.2em; cursor:pointer ; height:1em; float:left;"
                        onclick="alert ( 'sum oct')" src="images/lowerControls/plus.png" />
                        <img title="Sumar una octava" style="margin-top:.2em; cursor:pointer ; height:1em; float:left;"
                        onclick="alert ( 'sum oct')" src="images/lowerControls/plus.png" />
                        <p class="fontType" style="float:left; margin-right: .4em;">Notas</p>
                        <img title="Sumar una octava" style="margin-top:.2em; cursor:pointer ; height:1em; float:left ; "
                        onclick="alert ( 'sum oct')" src="images/lowerControls/plus.png" />
                        <img title="Sumar una octava" style="margin-top:.2em; cursor:pointer ; height:1em; float:left;"
                        onclick="alert ( 'sum oct')" src="images/lowerControls/plus.png" />
                    </div>
                    <div class="navegador" style="border:none; position:absolute; width: 95%; left:0%; top:10%;">
                        <p class="fontType" style="text-align: left; font-size:90%; ">Reproducir notas anteriores</p>
                        <div id="accordion2" style="margin-top:0em ; width:100%;">
                            <h2>
                                <a title="Reproducir las n notas anteriores" style="font-size:80%;" href="#">Por notas</a>
                            </h2>
                            <div>
                                <div style="margin-top:-.7em;">
                                    <div style="margin-top:-.7em;">
                                        <input title="Iniciar reproduccion" onclick="alert ( 'entro'); " style="font-size:60%;"
                                        id="testButton2" type="button" value="Iniciar" />
                                        <input title="Finalizar reproduccion" onclick="alert ( 'entro'); " style="font-size:60%;"
                                        id="testButton2" type="button" value="Finalizar" />
                                        <p id="naCiclo" class="fontType" style="font-size:59%; margin-top:.4em; text-align:left">Reproducir las 10 notas anteriores</p>
                                        <div title="Seleccionar la cantidad de notas por ciclo"
                                        style=" position:relative; margin-top:.5em;" id="naSlider"></div>
                                        <div position: style="background-color:red; margin-bottom:.5em; position: relative; top: 5%; width: 90%;">
                                            <p id="naText" class="fontType" style=" position:absolute; top:7%; font-size:70%; left: 10%; ">10</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h2>
                                <a title="Reproducir notas anteriores considerando porcentajes" style="font-size:80%;"
                                href="#">Por Porcentajes</a>
                            </h2>
                            <div>
                                <div style="margin-top:-.7em;">
                                    <input title="Iniciar reproduccion" onclick="alert ( 'entro'); " style="font-size:60%;"
                                    id="testButton2" type="button" value="Iniciar" />
                                    <input title="Finalizar reproduccion" onclick="alert ( 'entro'); " style="font-size:60%;"
                                    id="testButton2" type="button" value="Finalizar" />
                                    <p id="paCiclo" class="fontType" style="margin-top:.6em ; font-size:59%; text-align:left">Reproduccion de un 10%</p>
                                    <div title="Seleccionar la cantidad de notas por ciclo"
                                    style=" position:relative; margin-top:.5em;" id="paSlider"></div>
                                    <div position: style="background-color:red; margin-bottom:.5em; position: relative; top: 5%; width: 90%;">
                                        <p id="paText" class="fontType" style="margin-top:.4em; position:absolute; top:7%; font-size:70%; left: 10%; ">10</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="margin-top:.4em;">
                            <p class="fontType" style="text-align: left; font-size: 90%;">Reproducir notas posteriores</p>
                            <div id="accordion3" style="margin-top:0em ; width:100%;">
                                <h2>
                                    <a style="font-size:80%;" title="Reproducir las n notas posteriores" href="#">Por notas</a>
                                </h2>
                                <div>
                                    <div style="margin-top:-.7em;">
                                        <input title="Iniciar reproduccion" onclick="alert ( 'entro'); " style="font-size:60%;"
                                        id="testButton2" type="button" value="Iniciar" />
                                        <input title="Finalizar reproduccion" onclick="alert ( 'entro'); " style="font-size:60%;"
                                        id="testButton2" type="button" value="Finalizar" />
                                        <p id="pnCiclo" class="fontType" style="margin-top:.6em;font-size:59%; text-align:left">Reproducir las 10 notas posteriores</p>
                                        <div title="Seleccionar la cantidad de notas por ciclo"
                                        style=" position:relative; margin-top:.5em;" id="pnSlider"></div>
                                        <div position: style="background-color:red; margin-bottom:.5em; position: relative; top: 5%; width: 90%;">
                                            <p id="pnText" class="fontType" style=" position:absolute; top:7%; font-size:70%; left: 10%; ">10</p>
                                        </div>
                                    </div>
                                </div>
                                <h2>
                                    <a style="font-size:80%;" title="Reproducir notas posteriores considerando porcentajes"
                                    href="#">Por Porcentajes</a>
                                </h2>
                                <div>
                                    <div style="margin-top:-.7em;">
                                        <input title="Iniciar reproduccion" onclick="alert ( 'entro'); " style="font-size:60%;"
                                        id="testButton2" type="button" value="Iniciar" />
                                        <input title="Finalizar reprodccion" onclick="alert ( 'entro'); " style="font-size:60%;"
                                        id="testButton2" type="button" value="Finalizar" />
                                        <p id="ppCiclo" class="fontType" style="margin-top:.6em; font-size:59%; text-align:left">Reproduccion de un 10%</p>
                                        <div title="Seleccionar la cantidad de notas por ciclo"
                                        style=" position:relative; margin-top:.5em;" id="ppSlider"></div>
                                        <div position: style="background-color:red; margin-bottom:.5em; position: relative; top: 5%; width: 90%;">
                                            <p id="ppText" class="fontType" style="margin-top:.4em; position:absolute; top:7%; font-size:70%; left: 10%; ">10</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div title="Configuracion de ciclos" id="loopControls">
                    <!-- para evitar que se seleccionen con el tab las opciones de los checkbox
                    (debe ir de 1)-->
                    <input type="button" class="hiddenButton" />
                    <div id="accordion" style="margin-top:-1.2em">
                        <h2>
                            <a title="Crear ciclos personalizados" href="#">Personalizados</a>
                        </h2>
                        <div>
                            <div style="margin-top:-.7em;">
                                <p style="margin-bottom:.2em; text-align: left">Crear ciclos con botones</p>
                                <input title="Establecer inicio de ciclo"
                                onclick="createSongSeparator () ;" style="font-size:70%;" id="testButton2"
                                type="button" value="Inicio" />
                                <input title="Establecer fin de ciclo" onclick="alert ( 'entro'); " style="font-size:70%;"
                                id="testButton2" type="button" value="Fin" />
                                <p style="margin-top:.2em; text-align: left">Crear ciclos con el cursor</p>
                                <form name="checkboxForm" id="format2" style="padding-top:.4em; font-size: 70%">
                                    <input onclick=" toggleEditLoops ();" type="checkbox" id="check1" name="editLoops"
                                    />
                                    <label for="check1">Crear y Editar Ciclos</label>
                                </form>
                            </div>
                        </div>
                        <h3>
                            <a title="Mostrar ciclos de n notas" href="#">Por Notas</a>
                        </h3>
                        <div>
                            <input onclick="alert ( 'entro');" style="margin:1em; margin-top:-1.2em; font-size:70%;"
                            id="testButton2" type="button" value="Establecer inicio de ciclo" />
                            <p id="nporCiclo" class="fontType" style=" text-align:left">Notas por ciclo: 10</p>
                            <div title="Seleccionar la cantidad de notas por ciclo"
                            style=" position:relative; margin-top:.5em;" id="notesSlider"></div>
                            <div position: style="background-color:red; margin-bottom:.5em; position: relative; top: 5%; width: 90%;">
                                <p id="notesText" class="fontType" style=" position:absolute; top:7%; font-size:80%; left: 10%; ">10</p>
                            </div>
                        </div>
                        <h2>
                            <a title="Mostrar ciclos de cierto porcentaje" href="#">Por Porcentajes</a>
                        </h2>
                        <div>
                            <input onclick="alert ( 'entro');" style="margin:1em; margin-top:-1.2em; font-size:70%;"
                            id="testButton2" type="button" value="Establecer inicio de ciclo" />
                            <p id="pporCiclo" class="fontType" style="text-align:left">Notas por ciclo: 10</p>
                            <div title="Seleccionar la cantidad de notas por ciclo"
                            style=" position:relative; margin-top:.5em;" id="perSlider"></div>
                            <div position: style="background-color:red; margin-bottom:.5em; position: relative; top: 5%; width: 90%;">
                                <p id="perText" class="fontType" style=" position:absolute; top:7%; font-size:80%; left: 10%; ">10</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div title="Tempo" id="tempo">
                    <!-- para evitar que se seleccionen con el tab las opciones de los checkbox
                    (debe ir de 1)-->
                    <input type="button" class="hiddenButton" />
                    <div position: style="position: absolute; top: 10%; width: 86%; left: 5%;">
                        <p id="tempoText" class="fontType" style="font-size:80%; left: 40%; position:relative; float:left;">100%</p>
                    </div>
                    <div style="margin-top:-.3em;" id="tempoSlider"></div>
                </div>
                <div title="Volumen" id="volumen">
                    <!-- para evitar que se seleccionen con el tab las opciones de los checkbox
                    (debe ir de 1)-->
                    <input type="button" class="hiddenButton" />
                    <div style="margin-top:-1em;">
                        <div position: style="float:left; width: 100%; ">
                            <p class="fontType" style="text-align: left">Volumen del diapason</p>
                            <div style="" id="tVolume"></div>
                        </div>
                        <div position: style="float:left width: 100%;">
                            <p class="fontType" style="text-align: left">Volumen de los bajos</p>
                            <div style="" id="bVolume"></div>
                        </div>
                        <div position: style="float:left width: 100%;">
                            <p class="fontType" style="text-align: left">Volumen al pasar nota por nota</p>
                            <div style="" id="nVolume"></div>
                        </div>
                    </div>
                </div>
                <div title="Opciones de audio" id="soundControls">
                    <!-- para evitar que se seleccionen con el tab las opciones de los checkbox
                    (debe ir de 1)-->
                    <input type="button" class="hiddenButton" />
                    <div style="margin-top: -1em;">
                        <p class="fontType" style="text-align: left">Seleccionar tonalidad</p>
                        <form name="tonosForm" id="format" style="padding-top:.4em; font-size: 70%">
                            <input title="DO-FA-SIb" onclick=" validateForm ();" type="radio" id="radio1"
                            name="radio" />
                            <label style="width:33%" title="DO-FA-SIb" for="radio1">CFBb</label>
                            <input title="DO#-FA#-SI" onclick=" validateForm ();" type="radio"
                            id="radio2" name="radio" />
                            <label style="width:33%" title="DO#-FA#-SI" for="radio2">C#F#B</label>
                            <input title="RE-SOL-DO" onclick=" validateForm ();" type="radio"
                            id="radio3" name="radio" />
                            <label style="width:33%" title="RE-SOL-DO" for="radio3">DGC</label>
                            <input title="MIb-LAb-DO#" onclick=" validateForm ();" type="radio"
                            id="radio4" name="radio" />
                            <label style="width:33%" title="MIb-LAb-DO#" label for="radio4">EbAbC#</label>
                            <input title="MI-LA-RE" onclick=" validateForm ();" type="radio"
                            id="radio5" name="radio" />
                            <label style="width:33%" title="MI-LA-RE" for="radio5">EAD</label>
                            <input title="FA-SIb-MIb" onclick=" validateForm ();" type="radio"
                            id="radio6" name="radio" />
                            <label style="width:33%" title="FA-SIb-MIb" for="radio6">FBbEb</label>
                            <input title="FA#-SI-MI" onclick=" validateForm ();" type="radio"
                            id="radio7" name="radio" />
                            <label style="width:33%" title="FA#-SI-MI" for="radio7">F#BE</label>
                            <input title="SOL-DO-FA" onclick=" validateForm ();" type="radio"
                            id="radio8" name="radio" checked="checked" />
                            <label style="width:33%" title="SOL-DO-FA" for="radio8">GCF</label>
                            <input title="LAb-DO#-FA#" onclick=" validateForm ();" type="radio"
                            id="radio9" name="radio" />
                            <label style="width:33%" title="LAb-DO#-FA#" for="radio9">AbC#F#</label>
                            <input title="LA-RE-SOL" onclick=" validateForm ();" type="radio"
                            id="radio10" name="radio" />
                            <label style="width:33%" title="LA-RE-SOL" for="radio10">ADG</label>
                            <input title="SIb-MIb-LAb" onclick=" validateForm ();" type="radio"
                            id="radio11" name="radio" />
                            <label style="width:33%" title="SIb-MIb-LAb" for="radio11">BbEbAb</label>
                            <input title="SI-MI-LA" onclick=" validateForm ();" type="radio"
                            id="radio12" name="radio" />
                            <label style="width:33%" title="SI-MI-LA" for="radio12">BEA</label>
                        </form>
                    </div>
                    <div style="text-align:center; background-color: red; margin-top: .4em; ">
                        <p style="font-size:96%; width: 27%; font-size:90%; float:left; text-align: left;"
                        sclass="fontType">Octavas</p>
                        <img title="Sumar una octava" style="cursor:pointer ; margin-top: .14em; position:relative; height:10%; float:left;"
                        onclick="generalChangePitch ( 12 );" src="images/lowerControls/plus.png"
                        />
                        <img title="Restar una octava" style="cursor:pointer ;  margin-right:.14em; position:relative; margin-top: .11em; width:8%; float:left;"
                        onclick=" generalChangePitch ( -12 );" src="images/lowerControls/minus.png"
                        />
                        <p style="font-size:96%; width: 32%; font-size:90%; float:left; text-align: left;"
                        sclass="fontType">Semitonos</p>
                        <img title="Sumar un semitono" style="cursor:pointer ; margin-top: .14em; position:relative; height:10%; float:left;"
                        onclick=" generalChangePitch ( 1 ) " src="images/lowerControls/plus.png"
                        />
                        <img title="Restar un semitono" style="cursor:pointer ;  margin-top: .11em; position:relative; width:8%; float:left;"
                        onclick="generalChangePitch ( -1); " src="images/lowerControls/minus.png"
                        />
                    </div>
                </div>
                <div title="Informacion sobre notas" id="inf_notas">
                    <!-- para evitar que se seleccionen con el tab las opciones de los checkbox
                    (debe ir de 1)-->
                    <input type="button" class="hiddenButton" />
                </div>
                <div title="Ayuda" id="ayuda">
                    <!-- para evitar que se seleccionen con el tab las opciones de los checkbox
                    (debe ir de 1)-->
                    <input type="button" class="hiddenButton" />
                </div>
                <div title="Configurar vista" id="conf_vista">
                    <!-- para evitar que se seleccionen con el tab las opciones de los checkbox
                    (debe ir de 1)-->
                    <input type="button" class="hiddenButton" />
                </div>
                <div title="Lista de atajos" id="l_atajos">
                    <!-- para evitar que se seleccionen con el tab las opciones de los checkbox
                    (debe ir de 1)-->
                    <input type="button" class="hiddenButton" />
                </div>
                <!-- End Control dialogs -->
                <textarea id="console" class="default">testiando</textarea>
                <img src="images/header.png" id="logo" class="default"
                />
                <img src="images/loader.gif" id="loader" class="default" />
                <!--acordeon -->
                <img src="images/treble.png" id="trebleImage" class="default treble" style="z-index: 1; visibility: hidden;"
                />
                <img src="images/bass.png" id="bassImage" class="default bass" style="z-index: 1; visibility: hidden ;"
                />
                <canvas id="staticTreble" class="default treble" style="z-index: 1;">
                	debe actualizar su navegador web para poder utilizar esta aplicación
                </canvas>
                <canvas id="staticBass" class="default bass" style="z-index: 1; "></canvas>
                <!-- end acordeon -->
            </div>
            <div id="lowerControls" class="default">
                <div id="leftButtons">
                    <div class="btn">
                        <img title="Navegador" onclick=" toggleControlsDialog ( 'navegador')"
                        class="lControls_btn" src="images/lowerControls/navegador.png" />
                    </div>
                    <div class="btn">
                        <img title="Configuracion de ciclos" onclick="toggleControlsDialog( 'loopControls')"
                        class="lControls_btn" src="images/lowerControls/loopControls.png" />
                    </div>
                    <div class="btn">
                        <img title="Tempo" onclick=" toggleControlsDialog ( 'tempo')" class="lControls_btn"
                        src="images/lowerControls/velocidad.png" />
                    </div>
                    <div class="btn">
                        <img title="Volumen" onclick=" toggleControlsDialog ( 'volumen')" class="lControls_btn"
                        src="images/lowerControls/volume.png" />
                    </div>
                    <div class="btn">
                        <img title="Opciones de audio" onclick=" toggleControlsDialog ( 'soundControls')"
                        class="lControls_btn" src="images/lowerControls/soundControls.png" />
                    </div>
                </div>
                <div id="overviewBar">
                    <div id="overviewProgressBar">
                        <img id="overviewPCircle" src="images/lowerControls/progress.png" />
                        <!-- <div id=" overviewPCircle"></div> -->
                        <div id="zoomBar"></div>
                    </div>
                </div>
                <div id="rightButtons">
                    <div class="btn2">
                        <img title="Informacion sobre notas" onclick=" toggleControlsDialog ( 'inf_notas')"
                        class="lControls_btn" src="images/lowerControls/info_notas.png" />
                    </div>
                    <div class="btn2">
                        <img title="Ayuda" onclick=" toggleControlsDialog ( 'ayuda')" class="lControls_btn"
                        src="images/lowerControls/help.png" />
                    </div>
                    <div class="btn2">
                        <img title="Preferencias" onclick=" toggleControlsDialog ( 'conf_vista')"
                        class="lControls_btn" src="images/lowerControls/adjust_style.png" />
                    </div>
                    <div class="btn2">
                        <img title="Lista de atajos" onclick=" toggleControlsDialog ( 'l_atajos')"
                        class="lControls_btn" src="images/lowerControls/info.png" />
                    </div>
                </div>
            </div>
            <!-- end lower controls -->
        </div>
    </body>

</html>