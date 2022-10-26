import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HelloComponent from './components/HelloComponent';
import HelloName from './components/HelloName';
import Counter from './components/Counter';
import GroceryList from './components/GroceryList';
const root = ReactDOM.createRoot(document.getElementById('root'));
const arrayOfItems = ["Bread", "Eggs", "Orange Juice","Chicken Breast","Chips"]
root.render(
  <React.StrictMode>
    <HelloComponent mood="happy"/>
    {/* <HelloName name="Mohamed"/> */}
    {/* <Counter /> */}
    <GroceryList groceryList={arrayOfItems}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
