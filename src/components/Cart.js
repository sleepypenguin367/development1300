import '../App.css';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Cart(props) { 

  function reset() {
    props.setTotal(0);
    props.setCart([]);
    props.setSorting("Best Selling");
    props.setType("All");
    props.setIngredients([]);
    props.setToppings([]);
  }

  return (
    <div className='cart_style'>
      <h2 className="h4">Cart</h2>
        <div>{props.cart.map((item, index) => (<div><h2 className="h5" key={index}>{item.name}</h2><AddRemoveButton item={item} /></div>))}</div>
        <div><h2 className="h2-c">Total: ${props.total.toFixed(2)}</h2></div>
        <div><Button variant="contained" size="Large" onClick={reset}>Checkout</Button></div>
    </div>
  ); 

    function AddRemoveButton(props1) {
      const deleteCart = (teaName, price) => {
        let newCart = props.cart;
        let i = newCart.findIndex(item => item.name == teaName);  
        const c = newCart[i].count;
        newCart = newCart.filter((item)=>{
          return item.name != teaName;
        })
        if (c > 1) {
          props.setCart([...newCart, {name: teaName, count: c-1, price}]);
        } else {
          props.setCart([...newCart]);
        }
        props.setTotal(props.total - price);
      }
      const addCart = (teaName, price) => {
        let newCart = props.cart;
        let i = newCart.findIndex(item => item.name == teaName);  
        const c = newCart[i].count;
        newCart[i] = {name: teaName, count: c+1, price};
        props.setCart([...newCart]);
        props.setTotal(props.total + price);
      }
      return (
        <ButtonGroup>
          <Button variant="contained" onClick={()=>{deleteCart(props1.item.name, props1.item.price)}}>-</Button>
          <Button variant="contained" disabled>{props1.item.count}</Button>
          <Button variant="contained" onClick={()=>{addCart(props1.item.name, props1.item.price)}}>+</Button>
        </ButtonGroup>
      );
    }
  }
