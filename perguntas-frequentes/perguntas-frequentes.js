const questions = Array.from(document.querySelectorAll(".question"));

questions.forEach(question => {    
    question.addEventListener("click", e => {
        const answer = e.currentTarget.querySelector(".answer");
        answer.classList.toggle("open");
        

        questions.forEach(q => {
            if (q !== e.currentTarget) {
                q.querySelector(".answer").classList.remove("open")
            }
        })
    })
})