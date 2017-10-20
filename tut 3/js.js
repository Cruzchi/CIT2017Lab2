var chatStr = "";

function replaceEmojis(){
    chatStr = chatStr.replace(":)", "<img class='emoji' src='img/smile.png' />");
    
    chatStr = chatStr.replace(":(", "<img class='emoji' src='img/sad.png' />");
    
    chatStr = chatStr.replace("love", "<img class='emoji' src='img/love.png' />");
    
    chatStr = chatStr.replace("hou", "<img class='emoji' src='img/hou.png' />");
    
    chatStr = chatStr.replace("cry", "<img class='emoji' src='img/cry.png' />");
    
    chatStr = chatStr.replace("boogie", "*********");
}

function changeChatStr(){
    chatStr = document.getElementById("p1Input").value;
    document.getElementById("p1Input").value = "";
    
    /*if(chatStr == ":)"){
        chatStr = "<img class='emoji' src='img/smile.png' />";
     }else if(chatStr == ":("){
        chatStr = "<img class='emoji' src='img/sad.png' />";
     }*/
    
    replaceEmojis();
}

function changeChatStr2(){
    chatStr = document.getElementById("p2Input").value;
    document.getElementById("p2Input").value = "";
    
    replaceEmojis();
}

function createChat(chatNum){
    var ndiv = document.createElement("div");
    ndiv.innerHTML = chatStr;
    
    if(chatNum){
        ndiv.style.backgroundColor = "AFA";
    } else if (chatNum == 2){
        ndiv.style.backgroundColor = "AAF";
    }
    
    ndiv.style.padding = "10px";
    
    document.getElementById("chatDisplay").appendChild(ndiv);
}

document.getElementById("p1Input").addEventListener("keyup", function(ev){
   if (ev.keyCode == 13){
       changeChatStr();
       createChat(1);
   } 
});

document.getElementById("p2Input").addEventListener("keyup", function(ev){
   if (ev.keyCode == 13){
       changeChatStr2();
       createChat(2);
   } 
});