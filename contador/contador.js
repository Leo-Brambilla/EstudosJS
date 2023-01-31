let count = 0;

const updateCounter = function() {
    const display = document.querySelector('#display');
    display.innerHTML = count;

    if (count > 0) {
        display.style.color = 'green';
    } else if (count < 0) {
        display.style.color = 'red';
    } else {
        display.style.color = 'black';
    }
};

const increment = function() {
    count++;
    updateCounter();
};

const decrement = function() {
    count--;
    updateCounter();
};

const reset = function() {
    count = 0;
    updateCounter();
};

document.querySelector('#increment').addEventListener('click', increment);
document.querySelector('#decrement').addEventListener('click', decrement);
document.querySelector('#reset').addEventListener('click', reset);

updateCounter();
