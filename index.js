const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15

let spaceEl1 = document.getElementById("space-el-1")
let spaceEl2 = document.getElementById("space-el-2")

function generateCharacter() {
    let randomEl = Math.floor(Math.random() * characters.length)
    return characters[randomEl] 
}


function generatePassword() {
    let randomPassword1 = ""
    let randomPassword2 = ""
    for (let i = 0; i < passwordLength; i++) { 
        randomPassword1 += generateCharacter()
        randomPassword2 += generateCharacter()
    }
    const pass1 = randomPassword1
    const pass2 = randomPassword2
    spaceEl1.textContent = pass1
    spaceEl2.textContent = pass2
    
}
 





