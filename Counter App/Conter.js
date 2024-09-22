let count = 0;
const counter = document.getElementById('counter');
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');

increment.addEventListener('click', () => {
    count++;
    counter.textContent = count;
});

decrement.addEventListener('click', () => {
    if (count > 0) {
        count--;
        counter.textContent = count;
    }
});

reset.addEventListener('click', () => {
    count = 0;
    counter.textContent = count;
});