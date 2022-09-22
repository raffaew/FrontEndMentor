let submitButton = document.querySelector('.submit-btn');
let container1 = document.querySelector('.container-1');
let container2 = document.querySelector('.container-2');
let noteBtn = document.querySelectorAll('.notebtn');
let note = document.getElementById('note-text')

function submit () {

    container1.style.display = "none"; 
    container2.style.display = "flex"; 
    
}


noteBtn.forEach((rate) => { 
    rate.addEventListener('click', () => {
        note.innerHTML = rate.innerHTML;
    })
})

