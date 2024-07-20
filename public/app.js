document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    const clearButton = document.getElementById('clear');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.dataset.value === '=') {
                display.value = eval(display.value);
            } else {
                display.value += button.dataset.value;
            }
        });
    });

    clearButton.addEventListener('click', () => {
        display.value = '';
    });
});
