let a = '';
let b = '';
let sign = '';
let finish = false;


const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const signArr = ['/', 'X', '-', '+'];

const out = document.querySelector('.screen-num');

function clearAll () {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.allclear').onclick = clearAll;

document.querySelector('.box-main').onclick = (e) => {
    if(!e.target.classList.contains('btn')) return;
    if(e.target.classList.contains('allclear')) return;
    
    out.textContent = '';

    const key = e.target.textContent;

    if(num.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            out.textContent = a;
        } else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        } else {
            b += key;
            out.textContent = b;
        }
        console.log(a, sign, b);
        return;
    } 
    
    if(signArr.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(a, sign, b);
        return;
    }
   if(key === '=') {
    if ( b === '') b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "/":
                a = a / b;
                break;
            case "X": 
                a = a * b;
                break;
        }
    finish = true;
    out.textContent = a;
   }
   if(key === '%') {
        a = a / 100;
        finish = true;
        out.textContent = a;
   }
};