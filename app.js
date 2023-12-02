
let inputText = document.getElementById("inputText")

function setData(text){
    inputText.value +=text 

}

function equal(){
    inputText.value = eval(inputText.value)
}

function clearfunc(){
    inputText.value = ""
}

function SquareRoot(){
    inputText.value =   Math.sqrt(inputText.value)
}

function Square(){
    inputText.value  =  eval( inputText.value*inputText.value)
     
}

function cube(){
    inputText.value = eval( inputText.value*inputText.value*inputText.value)
     
}
