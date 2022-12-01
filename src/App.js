import './App.css';

import teaData from "./assets/tea-data.json";

import Item from "./components/Item";
import Topbar from './components/Topbar';
import Cart from './components/Cart'
import Menu from './components/Menu'

import { useState } from "react";

teaData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {

const [type, setType] = useState("All");
const [ingredients, setIngredients] = useState([]);
const [toppings, setToppings] = useState([]);
const [sorting, setSorting] = useState("Best Selling");
const [cart, setCart] = useState([]);
const [total, setTotal] = useState(0);

const filteredData = teaData.filter((item) => {
  if (type == "All" && ingredients.length == 0 && toppings.length == 0) {
    return true;
  }
  if (item.caffeine != type && type != "All") {
    return false;
  }
  if (!ingredients.every((ing)=>item.ingredients.includes(ing)) && ingredients.length != 0) {
    return false;
  }
  if (!toppings.every((tps)=>item.toppings.includes(tps)) && toppings.length != 0) {
    return false;
  }
  return true;
}).sort((a, b)=>{
  if (sorting == "Best Selling") {
    return a.index - b.index;
  } else if (sorting == "Rating") {
    return b.rating - a.rating;
  } else if (sorting == "Price Low to High") {
    return a.price - b.price;
  } else if (sorting == "Price High to Low") {
    return b.price - a.price;
  }
});

function Body() {
  return (
    <div className="container">
      <Menu type={type} setType={setType} ingredients={ingredients} setIngredients={setIngredients} toppings={toppings} setToppings={setToppings} sorting={sorting} setSorting={setSorting}/>
      <Items />
      <Cart setType={setType} setIngredients={setIngredients} setToppings={setToppings} setSorting={setSorting} cart={cart} setCart={setCart} total={total} setTotal={setTotal}/>
    </div>
  );
}


function Items() {
  return (
    <div className='container_main'>
      {filteredData.map((item) => (
        <Item key={item.index} tea={item} image={item.index} count={item.count} setCart={setCart} cart={cart} total={total} setTotal={setTotal}></Item>
      ))}
    </div>
  );
}


  return (
    <>
      <Topbar />
      <Body />
    </>
  );
}


export default App;
