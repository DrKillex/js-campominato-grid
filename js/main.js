'use strict';

function myCreateElement(elementType, class1, class2 = '', txt = ''){
    const myElement = document.createElement(elementType);
    myElement.append(txt)
    myElement.classList.add(class1);
    myElement.classList.add(class2);
    return myElement
};

function myAppend(numBox, where, classSize){
    for (let i = 1; i <= numBox; i++){
    where.append(myCreateElement('div', 'box', classSize, i))
}
};

const container = document.querySelector('.container');
const playButton = document.getElementById('play');
let difficulty;

playButton.addEventListener ('click', function(){
    container.innerHTML = '';
    difficulty = document.getElementById('difficulty').value;
    switch (difficulty){
        case 'easy':
        myAppend(100, container, 'box-10');
        break;
        case 'medium':
        myAppend(81, container, 'box-9');
        break
        case 'hard':
        myAppend(49, container, 'box-7');
        break;

        // in caso di emergenza
        // if (difficulty === 'easy'){
        //     myAppend(100, container, 'box-10')
        // }   else if (difficulty === 'medium'){
        //     myAppend(81, container, 'box-9')
        // }   else if (difficulty === 'hard'){
        //     myAppend(49, container, 'box-7')
        // }    
    }
});
