const ulEL = document.querySelector('ul');
const inputEL  = document.querySelector('input');
const buttonEL = document.querySelector('button')



function addItem() {
    const item = inputEL.value;
    inputEL.value = "";
    const liEL = document.createElement('li');
    const spanEL = document.createElement('span');
    const buttonEL = document.createElement('button');
    liEL.appendChild(spanEL);
    liEL.appendChild(buttonEL);
    spanEL.textContent = item;
    buttonEL.textContent = 'delete';
    ulEL.appendChild(liEL)


    buttonEL.onclick = function removeItem() {
        ulEL.removeChild(liEL);
    }
}


