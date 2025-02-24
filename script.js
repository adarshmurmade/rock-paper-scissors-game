
let userscore=0;
let compscore=0;


let choices=document.querySelectorAll(".choice")
const msg=document.querySelector(".msg")
const user=document.querySelector("#user-score")
const comp=document.querySelector("#comp-score")

const  gencompchoice=()=>{
    const options=["rock","paper","scizzor"]
    const optidx=Math.floor(Math.random()*3)
      return options[optidx]
}

const showwinner=(userwin)=>{
     if(userwin){
       userscore++
       user.innerText=userscore;
        msg.innerText="YOU WIN !";
        msg.style.backgroundColor="green";
     }else{
        compscore++
       comp.innerText=compscore;
         msg.innerText="YOU LOOSE";
        msg.style.backgroundColor="red";
     }

}

const drawgame=()=>{
    console.log("game is draw")
    msg.innerText="DRAW !";
    msg.style.backgroundColor="blue";
}

const playgame=(userchoice)=>{
     console.log("user choice =",userchoice)
   const compchoice=gencompchoice();  
   console.log("comp choice =",compchoice)
    
   if(userchoice===compchoice){
    drawgame();
   }
   else{
    let userwin=true;
    if(userchoice==="rock"){
        userwin=compchoice==="paper"?false:true
    }else if(userchoice==="paper"){
       userwin= compchoice==="rock"?true:false
    }else if(userchoice==="scissor"){
    userwin=compchoice==="rock"?false:true
    }
    showwinner(userwin)
   }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
        playgame(userchoice);
    })
})
