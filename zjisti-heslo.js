const mainAnswer = ["Karel", "Petr"]
const mainAnswerBad = ["Martin", "Tom"]


document.querySelector(".ask-1").addEventListener("input", function(event){

    let ask = event.target.value
    let answer = document.querySelector(".answer-1")

    if(ask.toLowerCase() === mainAnswer[0].toLocaleLowerCase()){
        answer.textContent = "1"
    }else if (ask.toLowerCase() === mainAnswerBad[0].toLocaleLowerCase()){
        answer.textContent = "6"
    }else{
        answer.textContent = "."
    }
        
  
})

