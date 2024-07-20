const { JSDOM } = require('jsdom');

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculatrice Simple</title>
</head>
<body>
    <div id="calculator">
        <input type="text" id="display" disabled>
        <div class="buttons">
            <button class="btn" data-value="7">7</button>
            <button class="btn" data-value="8">8</button>
            <button class="btn" data-value="9">9</button>
            <button class="btn" data-value="/">/</button>
            <button class="btn" data-value="4">4</button>
            <button class="btn" data-value="5">5</button>
            <button class="btn" data-value="6">6</button>
            <button class="btn" data-value="*">*</button>
            <button class="btn" data-value="1">1</button>
            <button class="btn" data-value="2">2</button>
            <button class="btn" data-value="3">3</button>
            <button class="btn" data-value="-">-</button>
            <button class="btn" data-value="0">0</button>
            <button class="btn" data-value=".">.</button>
            <button class="btn" data-value="=">=</button>
            <button class="btn" data-value="+">+</button>
            <button class="btn" id="clear">C</button>
        </div>
    </div>
    <script src="app.js"></script>
</body>
</html>
`;

describe('Calculator', () => {
    let document;

    beforeEach(() => {
        const dom = new JSDOM(html, { runScripts: "dangerously" });
        document = dom.window.document;
    });

    test('should display numbers when buttons are clicked', () => {
        const button7 = document.querySelector('[data-value="7"]');
        const display = document.getElementById('display');
        
        button7.click();
        expect(display.value).toBe('7');
    });

    test('should calculate the correct result', () => {
        const button7 = document.querySelector('[data-value="7"]');
        const buttonPlus = document.querySelector('[data-value="+"]');
        const button3 = document.querySelector('[data-value="3"]');
        const buttonEquals = document.querySelector('[data-value="="]');
        const display = document.getElementById('display');

        button7.click();
        buttonPlus.click();
        button3.click();
        buttonEquals.click();
        expect(display.value).toBe('10');
    });

    test('should clear the display when clear button is clicked', () => {
        const button7 = document.querySelector('[data-value="7"]');
        const clearButton = document.getElementById('clear');
        const display = document.getElementById('display');

        button7.click();
        clearButton.click();
        expect(display.value).toBe('');
    });
});
