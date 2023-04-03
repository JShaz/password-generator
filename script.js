const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c",
"d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", 
"9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let partOne = document.getElementById("part-One");
let partTwo = document.getElementById("part-Two");
let generateBtn = document.querySelector("btn");

function generatePassword() {
    let resultsArr = []
    let results = ""
    let resultsTwo = ""
    for (let i = 0; i <= 8; i++){
        
       if (i < characters.length){
            let randomIndex =  (Math.floor(Math.random() * characters.length))
            results += characters[randomIndex]
            partOne.textContent = results
        
        } 
    }
   let resultArrTwo = []
  
    for (let i = 0; i <= 8; i++){
        if (i < characters.length){
             let randomIndex =  (Math.floor(Math.random() * characters.length))
             resultsTwo += characters[randomIndex]
             partTwo.textContent = resultsTwo
         
         } 
     }
  
}
