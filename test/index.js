const myDiv = document.getElementById("myDiv");
window.addEventListener("keydown", move);

let hori = 0;
let vert = 0;

function move(event){

  switch(event.key){
    case "ArrowUp":
      vert-=5;
      myDiv.style.top = vert + "px";
      break;
    case "ArrowDown":
      vert+=5;
      myDiv.style.top = vert + "px";
      break;
    case "ArrowLeft":
      hori-=5;
      myDiv.style.left = hori + "px";
      break;
    case "ArrowRight":
      hori+=5;
      myDiv.style.left = hori + "px";
      break;
  }
}



const beginButton = document.getElementById("begin");
const myAnimation = document.getElementById("box");

beginButton.addEventListener("click", begin);

function begin(){
  let timerID = null;
  let x = 0;
  let y =0;
  let degrees = 0;

  setInterval(frame, 5);

  function frame(){
    if(x >= 200 || y > 200){//sets limit of move distance
      clearInterval(timerID);
    }else{
      degrees+=5;
      x+=1;//move right x-1 move left
      myAnimation.style.left = x +"px";
      y+=1;//move down y-1 move up
      myAnimation.style.top = y +"px";
      myAnimation.style.transform = "rotateZ("+degrees+"deg)";
    }
  }
}

