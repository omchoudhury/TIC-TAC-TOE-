let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGamebtn=document.querySelector("#newgame-btn");
let msgContainer=document.querySelector(".msg-container");
let msg =document.querySelector("#msg");

let turnO =true;//playerX,playerO
const winPatterns=[
	[0,1,2],
	[0,3,6],
	[0,4,8],
	[1,4,7],
	[2,5,8],
	[2,4,6],
	[3,4,5],
	[6,7,8],
];

boxes.forEach((box) => {
	box.addEventListener("click", () => {
		
		if(turnO) {
			// playerO
		box.innerText ="O";
		turnO=false;  //turn of O is ended now the turn return to X
      }else {
      	// playerX
      	box.innerText="x";
      	turnO=true;  //turn of X is ended noe the turn return to O
      }
        box.disabled = true;

        checkWinner();

     });
});

   const disablebox= () => {
   	for(let box of boxes) {
   		box.disabled=true;
   	}
   };

      const enablebox= () => {
   	for(let box of boxes) {
   		box.disabled=false;
      box.innerText="";
   	}
   };


   const showWinner = (winner) => {
   	msg.innerText = `congratulation, winner is ${winner}`;
   	msgContainer.classList.remove("hide");
     disablebox();
   }

  const checkWinner = () => {
  	for(let pattern of winPatterns) {
  	let pos1val =boxes[pattern[0]].innerText;
  	let pos2val =boxes[pattern[1]].innerText;
    let pos3val =boxes[pattern[2]].innerText;
  	
   if(pos1val != "" && pos2val != "" && pos3val != "") {
   	if(pos1val === pos2val && pos2val === pos3val) {
   	  console.log("winner ",pos1val);
   	  
   	  showWinner(pos1val);


   	  }
     }
  	}
  };


const resetgame =() => {
   turnO=true;
   enablebox();
   msgContainer.classList.add("hide");
};
 
 newGamebtn.addEventListener("click",resetgame);
 resetbtn.addEventListener("click",resetgame);




















