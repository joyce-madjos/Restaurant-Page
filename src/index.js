import './style.scss';
import {createAboutPage as about}  from './about.js';

let content = document.getElementById("content");

console.log("Meow!");

function component() {
    const element = document.createElement('div');
    element.textContent = "Catmeow";
    element.id = "element";
    return element;
  }
  
  content.appendChild(component());
  content.appendChild(about());