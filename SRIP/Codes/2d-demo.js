/* Javascript code here */


var canvas;
var graphics;
var shape = 0;
var transforms = [];
var transformParagraphs = [];
var transformContainer;
var selectedTransform = -1;
var animating = false;
var animationStep;
var showResultOnly = false;

var colors = ["black", "#AA0000", "#00AA00", "#0000AA", "#00AAAA", "#AA00AA", "#AAAA00", "#885500", "#AAAAAA"];

function draw() {
    var i,j;
    graphics.clearRect(0,0,400,400);
    graphics.strokeStyle = "black";

    graphics.save();
    graphics.translate(200.5,200.5);
    graphics.scale(40,-40);
    graphics.beginPath();
    graphics.moveTo(-5,0);
    graphics.lineTo(5,0);
    graphics.moveTo(0,5);
    graphics.lineTo(0,-5);
    graphics.restore();
    graphics.lineWidth = 2;
    graphics.stroke();

    graphics.save();
    graphics.translate(200.5,200.5);
    graphics.scale(40,-40);
    graphics.beginPath();
    for (i = -4; i <= 4; i++) {
        graphics.moveTo(-5,i);
        graphics.lineTo(5,i);
        graphics.moveTo(i,-5);
        graphics.lineTo(i,5);
    }
    graphics.restore();
    graphics.lineWidth = 1;
    graphics.stroke();

    graphics.fillStyle = "#8080FF";
    for (i = -5; i <= 5; i++) {
        if (i != 0) {
            graphics.fillText(String(i), 40*(i+5)+2, 198);
            graphics.fillText(String(i), 202, 400 - 40*(i+5)-2);
        }
    }
    
    graphics.save();
    
    graphics.translate(200.5,200.5);
    graphics.scale(40,-40);
    if (!showResultOnly || animating) {
        graphics.save();
        drawShape(0);
        graphics.restore();
    }
    
    if (showResultOnly) {
        for (j = transforms.length-1; j >= 0; j--) {
           applyTransform(transforms[j]);
        }
        drawShape(transforms.length);
    }
    else {
        var top = animating? animationStep : transforms.length;
        for (i = 0; i < top; i++) {
            graphics.save();
            for (j = i; j >= 0; j--) {
               applyTransform(transforms[j]);
            }
            drawShape(i+1);
            graphics.restore();
        }
    }
    
    graphics.restore();
    
}

var errorTimeout = null;
function setErrorMessage(message) {
    if (errorTimeout) {
        clearTimeout(errorTimeout);
        errorTimeout = null;
    }
    var s = message || "Modeling Transforms in 2D";
    document.getElementById("headline").innerHTML = s;
    document.getElementById("headline").style.color = message? "red" : "black";
    if (message) {
        errorTimeout = setTimeout(function() { setErrorMessage() }, 5000);        
    }
}

function clearTransforms() {
    setErrorMessage();
    stopAnimation();
    transforms = [];
    transformParagraphs = [];
    selectedTransform = -1;
    document.getElementById("transforms").innerHTML = "";
    draw();
    document.getElementById("rotBut").disabled = false;
    document.getElementById("transBut").disabled = false;
    document.getElementById("scaleBut").disabled = false;
    document.getElementById("deleteButton").disabled = true;
    document.getElementById("upButton").disabled = true;
    document.getElementById("downButton").disabled = true;
    document.getElementById("animateCheckbox").disabled = true;
}

function deleteLast() {
    setErrorMessage();
    if (transforms.length == 0) {
        return;
    }
    if (transforms.length == 1) {
        stopAnimation();
    }
    transforms.pop();
    var p = transformParagraphs.pop();
    document.getElementById("transforms").removeChild(p);
    if (selectedTransform >= transforms.length) {
        selectedTransform = -1;
        document.getElementById("upButton").disabled = true;
        document.getElementById("downButton").disabled = true;
    }
    document.getElementById("rotBut").disabled = false;
    document.getElementById("transBut").disabled = false;
    document.getElementById("scaleBut").disabled = false;
    document.getElementById("deleteButton").disabled = (transforms.length == 0);
    document.getElementById("animateCheckbox").disabled = (transforms.length == 0);
    draw();
}

function moveTransformUp() {
    setErrorMessage();
    if (selectedTransform <= 0) {
        return;
    }
    var p = transformParagraphs[selectedTransform];
    transformParagraphs[selectedTransform] = transformParagraphs[selectedTransform-1];
    transformParagraphs[selectedTransform-1] = p;
    var t = transforms[selectedTransform];
    transforms[selectedTransform] = transforms[selectedTransform-1];
    transforms[selectedTransform - 1] = t;
    selectedTransform -= 1;
    document.getElementById("upButton").disabled = (selectedTransform == 0);
    document.getElementById("downButton").disabled = (selectedTransform == transforms.length-1);
    var tr = document.getElementById("transforms");
    if (selectedTransform == 0) {
        tr.removeChild(p);
        tr.insertBefore(p,tr.firstElementChild);
    }
    else {
        var prev = p.previousElementSibling;
        tr.removeChild(p);
        tr.insertBefore(p,prev);
    }
    transformParagraphs[selectedTransform].style.color = colors[selectedTransform+1];
    transformParagraphs[selectedTransform+1].style.color = colors[selectedTransform+2];
    transformParagraphs[selectedTransform].numberInList = selectedTransform;
    transformParagraphs[selectedTransform+1].numberInList = selectedTransform+1;
    draw();
}

function moveTransformDown() {
    setErrorMessage();
    if (selectedTransform >= transforms.length - 1) {
        return;
    }
    var p = transformParagraphs[selectedTransform];
    transformParagraphs[selectedTransform] = transformParagraphs[selectedTransform+1];
    transformParagraphs[selectedTransform+1] = p;
    var t = transforms[selectedTransform];
    transforms[selectedTransform] = transforms[selectedTransform+1];
    transforms[selectedTransform + 1] = t;
    selectedTransform += 1;
    document.getElementById("upButton").disabled = (selectedTransform == 0);
    document.getElementById("downButton").disabled = (selectedTransform == transforms.length-1);
    var tr = document.getElementById("transforms");
    if (selectedTransform == transforms.length - 1) {
        tr.removeChild(p);
        tr.appendChild(p);
    }
    else {
        var next = p.nextElementSibling.nextElementSibling;
        tr.removeChild(p);
        tr.insertBefore(p,next);
    }
    transformParagraphs[selectedTransform-1].style.color = colors[selectedTransform];
    transformParagraphs[selectedTransform].style.color = colors[selectedTransform+1];
    transformParagraphs[selectedTransform-1].numberInList = selectedTransform-1;
    transformParagraphs[selectedTransform].numberInList = selectedTransform;
    draw();
}




function init() {
    canvas = document.getElementById("maincanvas");
    if (!maincanvas.getContext) {
        document.getElementById("headline").innerHTML = "ERROR: Canvas not supported";
        return;
    }
    graphics = canvas.getContext('2d');
    graphics.font = "10pt monospace";
    transformContainer = document.getElementById("transforms");
    
    draw();
}
    function openTab(evt, tabName) {
  // Declare all variablesd

  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  
  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}