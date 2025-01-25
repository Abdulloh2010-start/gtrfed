document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.height = '800px';
document.body.style.backgroundColor = '#000';
document.body.style.fontFamily = 'Arial, sans-serif';

let d1 = document.createElement('div');
d1.style.color = 'white';
d1.style.textAlign = 'center';
d1.style.padding = '20px';
d1.style.borderRadius = '10px';
d1.style.width = '300px';
document.body.appendChild(d1);

let d2 = document.createElement('div');
d2.style.marginBottom = '20px';
d2.style.display = 'flex';
d2.style.justifyContent = 'space-between';
d2.style.alignItems = 'center';
d1.appendChild(d2);

let inp1 = document.createElement('input');
inp1.type = 'number';
inp1.placeholder = 'Enter your number';
inp1.style.padding = '10px';
inp1.style.width = '200px';
inp1.style.borderRadius = '5px';
inp1.style.border = '1px solid #555';
inp1.style.color = 'black';
d2.appendChild(inp1);

let btn1 = document.createElement('button');
btn1.textContent = 'Send';
btn1.style.padding = '10px 15px';
btn1.style.border = 'none';
btn1.style.borderRadius = '5px';
btn1.style.backgroundColor = '#444';
btn1.style.color = 'white';
d2.appendChild(btn1);

let d3 = document.createElement('div');
d3.style.display = 'flex';
d3.style.justifyContent = 'space-between';
d3.style.alignItems = 'center';
d3.style.marginBottom = '20px';
d3.style.padding = '10px';
d3.style.borderRadius = '5px';
d3.style.backgroundColor = 'gray';
d1.appendChild(d3);

let btn2 = document.createElement('button');
btn2.textContent = '-';
btn2.style.fontSize = '40px'
btn2.style.width = '70px'
btn2.style.padding = '10px';
btn2.style.border = 'none';
btn2.style.color = 'white';
btn2.style.backgroundColor = 'gray'
btn2.addEventListener("mousedown", () => {
    btn2.style.backgroundColor = "red";
});
btn2.addEventListener("mouseup", () => {
    btn2.style.backgroundColor = "gray";
});
d3.appendChild(btn2);

let p1 = document.createElement('p');
p1.textContent = '0';
p1.style.fontSize = '30px';
p1.style.color = 'black';
d3.appendChild(p1);

let btn3 = document.createElement('button');
btn3.textContent = '+';
btn3.style.fontSize = '40px'
btn3.style.padding = '10px';
btn3.style.border = 'none';
btn3.style.backgroundColor = 'gray';
btn3.style.color = 'white';
btn3.style.width = '70px';
btn3.addEventListener("mousedown", () => {
    btn3.style.backgroundColor = "green";
});
btn3.addEventListener("mouseup", () => {
    btn3.style.backgroundColor = "gray";
});
d3.appendChild(btn3);

let d4 = document.createElement('div');
d4.style.display = 'flex';
d4.style.justifyContent = 'space-evenly';
d4.style.alignItems = 'center';
d1.appendChild(d4);

let p2 = document.createElement('p');
p2.textContent = 'Select color';
p2.style.fontSize = '30px';
p2.style.color = 'white';
p2.style.height = '60px'
d4.appendChild(p2);

let inp2 = document.createElement('input');
inp2.type = 'color';
inp2.style.marginBottom = '20px';
inp2.style.border = 'none';
inp2.style.width = '50px';
inp2.style.height = '50px';
d4.appendChild(inp2);

btn1.addEventListener('click', () => {
    let v2 = (inp1.value);
    p1.textContent = v2;
});

btn3.addEventListener('click', () => {
    let v3 = parseInt(p1.textContent);
        p1.textContent = v3 + 1;
});

btn2.addEventListener('click', () => {
    let v4 = (p1.textContent);
    p1.textContent = v4 - 1;
});

inp2.addEventListener('input', () => {
    p1.style.color = inp2.value;
});