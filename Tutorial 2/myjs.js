document.getElementById("open").addEventListener("click", function(){
    document.getElementById("control").style.left = "0px";
});

document.getElementById("bg1").addEventListener("click", function(){
    document.getElementById("backgroundImage").style.backgroundImage = "url(img1.jpg)";
});
document.getElementById("bg2").addEventListener("click", function(){
    document.getElementById("backgroundImage").style.backgroundImage = "url(img2.jpg)";
});
document.getElementById("bg3").addEventListener("click", function(){
    document.getElementById("backgroundImage").style.backgroundImage = "url(img3.jpg)";
});
document.getElementById("bg4").addEventListener("click", function(){
    document.getElementById("backgroundImage").style.backgroundImage = "url(img4.jpg)";
});
document.getElementById("close").addEventListener("click", function(){
    document.getElementById("control").style.left = "-200px";
});