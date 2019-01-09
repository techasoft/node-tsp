/*
* =======================================================
* Document Info
* =======================================================
*
*  @Doc Description: agoralive web site Custom Under Constraction Canvas
*  @Author: d4rth0nyx
*  @Creation Date: 2017-11-29
*  @Copyright: Copyright (c) 2017 techasoft - http://techasoft.gr
*  @Version: 1.0.1
*
*  @Status: Development
*  @Last Modified Date: 2017-11-29
*  @Last Modify User: d4rth0nyx
*
*
* //////////////// Actions TO DO //////////////////////

1) 
2) 
3) 
4) 
5) 
========================================================= 
*/

/*@include: https://code.createjs.com/createjs-2013.05.14.min.js*/


//Remove default margin (8px?)
document.body.style.margin = "0em";
//Remove scrolling bars
//  document.documentElement.style.overflow = 'hidden';
//Get DOM element by ID.
var canvas = document.getElementById("under_construction_canvas");
canvas.style.background = "#141414";
var stage = new createjs.Stage("under_construction_canvas");
var resize = false;

//Adding functionality to the onresize event.
//Signal to the tick method that it needs to adjust for resize.
window.onresize = function(){
  this.resize = true;
}
window.onresize();

 

function init(){
  // Set the function to run each frame and FPS
	createjs.Ticker.addEventListener("tick", tick);
	  createjs.Ticker.setFPS(30);
  createjs.Ticker.useRAF = true;
}


var techasoft_logoPerTick = 4;
function tick(){
  for (var i = 0; i < techasoft_logoPerTick; i++) {
    var techasoft_logo = new createjs.Bitmap("images/agoralive-symbol.svg");
    
    // Set object location and alpha
    techasoft_logo.set({x:Math.random()*canvas.width,
              y:Math.random()*canvas.height,
              alpha:0}); // Invisible
    // Add object to stage to make it visible
    stage.addChild(techasoft_logo);
    
    //Tween the fade in/out and rotation
    new createjs.Tween.get(techasoft_logo)
              // techasoft_logo fades in
    .to({alpha:0.8,rotation:90}, r*500+300, createjs.Ease.linear)
              // techasol_logo fades out
    .to({alpha:0,rotation:180}, r*500+300, createjs.Ease.linear)
              // then call a function to remove it
              .call(function(){ stage.removeChild(techasoft_logo); });
    // Simultaneously tween the falling motion
    var r = Math.random();
    new createjs.Tween.get(techasoft_logo)
              // Use a second tween to add movement
							.to({x:techasoft_logo.x-r*20-10,y:techasoft_logo.y+r*100+10},1600)
							
  }
	
	
  if (window.resize){
		stage.canvas.width = window.innerWidth;
		stage.canvas.height = window.innerHeight/2;
//    stage.canvas.height = window.innerHeight;
    resize = false;
  }
  stage.update();
}

// Run the animation
init();

