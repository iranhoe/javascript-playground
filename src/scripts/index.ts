// import _ from 'lodash';
// import setupDebugger from './debugger';

 function component() {
   const element = document.createElement('div');
   const btn = document.createElement('button');

   element.classList.add("hello");

  //  element.innerHTML = _.join(['Hello iran', 'webpack'], ' ');

   btn.innerHTML = 'Click me and check the console!';
  //  btn.onclick = setupDebugger;

   element.appendChild(btn);

   return element;
 }

 document.body.appendChild(component());