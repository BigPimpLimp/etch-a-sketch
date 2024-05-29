document.body.onload = addDiv;

function addDiv(userInput) {
    let i = 0;
    const percentage = 100 / userInput;
    const totalSquares = userInput * userInput;
    while (i < totalSquares) {
        const newDiv = document.createElement('div');
        newDiv.setAttribute('id', 'colorMe');
        newDiv.style.setProperty('width', `calc(${percentage}% - 2px)`);
        newDiv.style.setProperty('height', `calc(${percentage}$ - 2px)`);
        const mainDiv = document.getElementById('container')
        mainDiv.appendChild(newDiv);
        i++;
    }
}

let hover = document.getElementById('container');
console.log(hover);

hover.addEventListener('mouseenter', (e) => {
    e.target.style.backgroundColor = 'black';
});

hover.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'black';
});

const btn = document.createElement('button');
const div = document.getElementById('container');
btn.textContent = 'Press Me';
btn.style.height = '20px';
btn.style.width = '100px';
btn.style.margin = '5px'
document.body.insertBefore(btn, div);

btn.addEventListener('click', (e) => {
    let grid = prompt('Enter the numbers of squares per side:')
    console.log(grid);
    removeDiv();
    addDiv(grid);
});

function removeDiv() {
    document.querySelectorAll('[id=colorMe]').forEach(e => e.remove());
}