let count = 0;
const display = document.getElementById('counter-display');
document.getElementById('increment-btn').addEventListener('click', () => {
    count++;
    display.textContent = count;
});
document.getElementById('decrement-btn').addEventListener('click', () => {
    count--;
    display.textContent = count;
});
document.getElementById('reset-btn').addEventListener('click', () => {
    count = 0;
    display.textContent = count;
});