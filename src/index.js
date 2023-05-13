import './style.scss';


console.log("Meow!");

function component() {
    const element = document.createElement('div');
    element.textContent = "Catmeow";
    element.id = "element";
    return element;
  }
  
  document.body.appendChild(component());