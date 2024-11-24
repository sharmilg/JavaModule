'use strict'
const targetElement = document.getElementById('target');
const names = ['John', 'Paul', 'Jones'];
for (let i = 0; i < names.length; i++) {
  targetElement.innerHTML += `<li>${names[i]}</li>`;
}
