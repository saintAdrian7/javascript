//initialize count
let count = 0

//defining the increment function
function increment(){
    count +=1 
    document.getElementById("number").textContent=count

}

function decrement(){
    if(count > 0){
        count -=1
        document.getElementById("number").textContent=count
    }
}
//defining the save function
function save(){
    document.getElementById("entries").textContent += count + "-"
    count = 0
    document.getElementById("number").textContent=count
    
}

function reset(){
    document.getElementById("entries").textContent ="Previous Entries: " 
}





