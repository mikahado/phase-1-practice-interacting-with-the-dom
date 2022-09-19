document.addEventListener("DOMContentLoaded", () => {
    counter()
    let interval = setInterval(incrementCounter, 1000) 

    const plus = document.getElementById("plus")
    plus.addEventListener("click", incrementCounter)

    const minus = document.getElementById("minus")
    minus.addEventListener("click", () => {
        let count = document.getElementById("counter")   
        count.textContent = parseInt(count.textContent, 0) -1
    })   

    const heart = document.getElementById("heart")
    let likesObj = {} //keeps track of number in counter
    heart.addEventListener("click", () => {
        
        let counterValue = document.getElementById("counter").textContent
        let li = document.createElement("li")
        
        if(likesObj[counterValue] > 0){
            likesObj[counterValue] += 1

        }else{
            likesObj[counterValue] = 1
        }

        let likesUL = document.querySelector(".likes")
        li.innerText = `${counterValue} has been liked ${likesObj[counterValue]} times.`
        likesUL.appendChild(li)

    }
    )

    const submit = document.getElementById("submit")
    const pause = document.querySelector("#pause")
    pause.addEventListener("click", () => {
        if (pause.innerText === "resume") {
            pause.innerText = "pause"
            interval = setInterval(incrementCounter, 1000) 
        }else{
            pause.innerText = "resume"
            clearInterval(interval)
        }
        
        minus.disabled = !minus.disabled
        plus.disabled = !plus.disabled
        heart.disabled = !heart.disabled
        submit.disabled = !submit.disabled

    })

    let commentForm = document.querySelector("#comment-form")
    commentForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const list = document.getElementById("list")
        let li = document.createElement("li")
        li.innerText = e.target[0].value
        list.appendChild(li)
        commentForm.reset()
      }
    )

})





function counter() {
    incrementCounter()

}

incrementCounter()

function incrementCounter() {
    let count = document.getElementById("counter")
    count.textContent = parseInt(count.textContent) +1  //parseInt converts string to integer! Much need here. 
}