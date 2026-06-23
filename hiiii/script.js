const text =
"I really trust you ❤️\n\nPlease abhi ke liye maaf kr de 🥺";

let i = 0;

function typeWriter(){
    if(i < text.length){
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter,50);
    }
}

typeWriter();

function showMessage(){
    document.getElementById("msg").innerHTML =
    "❤️ Thank You ❤️";
}

for(let i=0;i<40;i++){
    let heart=document.createElement("div");
    heart.className="heart";
    heart.innerHTML="❤️";
    heart.style.left=Math.random()*100+"vw";
    heart.style.fontSize=(20+Math.random()*20)+"px";
    heart.style.animationDuration=(4+Math.random()*5)+"s";
    document.body.appendChild(heart);
}