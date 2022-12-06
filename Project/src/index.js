 if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
 }

const h1 = document.createElement('H1');
const content = document.createTextNode('Hello webpack');
h1.appendChild(content);
document.body.appendChild(h1);