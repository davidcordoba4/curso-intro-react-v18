import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

// function App() {
//   return (
//     <h1 id="title">
//       Oli React
//     </h1>
//     //React.createElement('h1', { id: 'title' }, 'Oli React'); //Es lo mismo que la parte superior, pero mucho más facil de leer y más comodo de escribir
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
