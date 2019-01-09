/*
* =======================================================
* Document Info
* =======================================================
*
*  @Doc Description: techasol web site Custom Under Constraction Canvas
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

var createjs;
(function (createjs) {
})(createjs || (createjs = {}));

var project;
(function (project) {
    var stage;
    var queue;
    var canvas;
    var words = 'TECHASOL TECHASOFT AGORALIVE METACO SOFTWARE HARDWARE SOLUTIONS SECURITY TECHNOLOGICALLY ADVANCED MARKET E-SHOP INFRASTRUCTURE INNOVATION RESEARCH WEB CLOUD SERVICES HOSTING DEDICATED DEVELOPMENT NETWORK SERVER CLIENT DATACENTER ΛΟΓΙΣΜΙΚΟ ΥΠΟΔΟΜΕΣ ΑΓΟΡΑ ΤΕΧΝΟΛΟΓΙΑ ΕΡΕΥΝΑ ΑΣΦΑΛΕΙΑ ΔΙΚΤΥΑ ΥΠΗΡΕΣΙΕΣ ΚΑΤΑΣΚΕΥΕΣ ΛΥΣΕΙΣ '.split(' ');
    var poolParticle = [];
    var isWaiting = false;
    var fonts = ["Roboto", "Habibi", 'Freckle Face', 'Archivo Black', 'Krona One'];
    /*var fonts = ["Habibi", 'Freckle Face', 'Archivo Black', 'Krona One'];*/
    var colors = ["#3f51b5", "#76b900", "#673AB7", "#d9d019", "#515151"];
    var indexNumber = fonts.length * Math.random() >> 0;
    var currentColor = colors[(colors.length * Math.random()) >> 0];

    function init() {
        var queue = new createjs.LoadQueue();
        queue.useXHR = false;
        queue.addEventListener("complete", initContent);
        queue.addEventListener("fileload", handleFileLoad);
        queue.loadManifest({ src: 'https://fonts.googleapis.com/css?family=Roboto|Habibi|Freckle+Face|Archivo+Black|Krona+One', type: "css" }, false);
        /*queue.loadManifest({ src: 'https://fonts.googleapis.com/css?family=Habibi|Freckle+Face|Archivo+Black|Krona+One', type: "css" }, false);*/
        queue.load();
    }
    project.init = init;
    function handleFileLoad(event) {
        if (event.item.type == "css") {
            (document.getElementsByTagName("head")[0]).appendChild(event.item.tag);
        }
    }

    function initContent() {
        canvas = document.getElementById("under_construction_canvas");
        canvas.width = window.innerWidth;
        canvas.height=window.innerHeight/1.5;
        stage = new createjs.Stage(canvas);
        queue = [new createjs.Rectangle(0, 0, canvas.width, canvas.height)];

        createjs.Ticker.setFPS(60);
        createjs.Ticker.useRAF = true;
        createjs.Ticker.addEventListener("tick", handleTick);
    }

    function handleTick() {
        var i = 0;
        while (queue.length > 0 && i < 4) {
            var rect = queue.pop();
            if (rect.width > 4 && rect.height > 4) {
                fillRegion(rect);
                i++;
            }
        }
        if (!queue.length) {
            if (isWaiting == false) {
                setTimeout(function () {
                    queue = [new createjs.Rectangle(0, 0, canvas.width, canvas.height)];
                    for (var i = 0; i < stage.getNumChildren(); i++) {
                        var tf = stage.getChildAt(i);
                        toPool(tf);
                    }
                    stage.removeAllChildren();
                    isWaiting = false;
                    indexNumber++;
                    if (indexNumber >= fonts.length)
                        indexNumber = 0;
                    currentColor = colors[colors.length * Math.random() >> 0];
                }, 1500);
            }
            isWaiting = true;
        }

        stage.update();
    }

    function fillRegion(region) {
        var tf = fromPool();
        tf.text = choice(words).toUpperCase();
        tf.font = "72px " + fonts[indexNumber];
        tf.color = currentColor;
        tf.textAlign = "start";
        tf.textBaseline = "bottom";

        var bound = new createjs.Rectangle(0, 0, tf.getMeasuredWidth(), tf.getMeasuredHeight());
        stage.addChild(tf);

        var s = region.width / bound.width * (Math.random() * 0.4 + 0.3);
        if (bound.height * s > region.height)
            s = region.height / bound.height;
        tf.scaleX = s;
        tf.scaleY = s;
        bound.x *= s;
        bound.y *= s;
        bound.width *= s;
        bound.height *= s;

        switch (choice([1, 2, 3, 4])) {
            case 1:
                tf.x = region.x - bound.x;
                tf.y = region.y - bound.y;
                queue.push(new createjs.Rectangle(region.x + bound.width, region.y, region.width - bound.width, bound.height), new createjs.Rectangle(region.x, region.y + bound.height, region.width, region.height - bound.height));
                break;
            case 2:
                tf.x = region.x - bound.x;
                tf.y = (region.y + region.height) - (bound.y + bound.height);
                queue.push(new createjs.Rectangle(region.x + bound.width, (region.y + region.height) - bound.height, region.width - bound.width, bound.height), new createjs.Rectangle(region.x, region.y, region.width, region.height - bound.height));
                break;
            case 3:
                tf.x = (region.x + region.width) - (bound.x + bound.width);
                tf.y = region.y - bound.y;
                queue.push(new createjs.Rectangle(region.x, region.y, region.width - bound.width, bound.height), new createjs.Rectangle(region.x, region.y + bound.height, region.width, region.height - bound.height));
                break;
            case 4:
                tf.x = (region.x + region.width) - (bound.x + bound.width);
                tf.y = (region.y + region.height) - (bound.y + bound.height);
                queue.push(new createjs.Rectangle(region.x, (region.y + region.height) - bound.height, region.width - bound.width, bound.height), new createjs.Rectangle(region.x, region.y, region.width, region.height - bound.height));
                break;
        }

        tf.y += bound.height;
        tf.alpha = 0;

        createjs.Tween.get(tf).to({ alpha: 1 }, 1000, createjs.Ease.cubicOut);
    }

    function choice(ary) {
        return ary[Math.floor(ary.length * Math.random())];
    }

    function fromPool() {
        if (poolParticle.length)
            return poolParticle.pop(); else
            return new createjs.Text();
    }

    function toPool(text) {
        poolParticle.push(text);
    }
})(project || (project = {}));

window.onload = project.init;

window.addEventListner('resize',function(){
  canvas.width = window.innerWidth;
  canvas.height=window.innerHeight/1.5;
},false);
