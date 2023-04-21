const button = document.querySelector(".button");
const form = document.querySelector('.form')
const reset = document.querySelector('.button_reset')
let inputs = document.querySelectorAll('.input');

button.addEventListener('click', function() {
    
    for (let input of inputs) {
        input.classList.remove('correct'); // удаление класса
        input.classList.remove('incorrect'); // удаление класса
    
        if (input.value == input.dataset.right) {
            input.classList.add('correct');
        } else {
            input.classList.add('incorrect');
        }
    }
});

reset.addEventListener('click', function() {
    for (let input of inputs) {
            input.classList.remove('correct'); // удаление класса
            input.classList.remove('incorrect');
            input.value = '';
    } // удаление класса
});