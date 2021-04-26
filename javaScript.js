let numerInput = document.getElementById('number-input');
let runButton = document.getElementById('run-button');
let outPut = document.getElementById('output');

function printMultiply() {
    let number = Number(numerInput.Value)
    let outputHtml = '';

    if(number === 0){
        outPut.innerHTML = 'อยากบอกว่าไม่คำนวณให้';
        return;
    }

    for(let i = 1; i <= 12; i++){
        outputHtml += '<p>';
        outputHtml += number + 'x' + i + '=' + (number * i);
        outputHtml += '</p>';
    
    }
    outPut.innerHTML = outputHtml;
}

runButton.addEventListener('click', printMultiply);







let discountbutton = document.getElementById('discount-button');
let message = document.getElementById('message');

function showMessage() {

    message.innerHTML ='สิทการใช้ส่วนลดหมดแล้วครับ';
   
}

discountbutton.addEventListener('click', showMessage);
