
import '../App.css';

import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';

export default function ToppingsGroup(props) {

  function addToIng1(ing, checked) {
    if (!checked && props.toppings.includes(ing)) {
      const newList = [...props.toppings.filter((item) => {return item !== ing})];
      props.setToppings([...newList]);
    }
    else if (checked && !props.toppings.includes(ing)) {
      const newList = [...props.toppings, ing];
      props.setToppings([...newList]);    
    }
  }

  return (
    <FormControl>
      <FormLabel><h3>Toppings</h3></FormLabel>
        <FormControlLabel value="Boba" control={<Checkbox checked={props.toppings.includes("boba")} onChange={(event)=>{addToIng1("boba", event.target.checked)}}/>} label="Boba" />
        <FormControlLabel value="Cheese Foam" control={<Checkbox checked={props.toppings.includes("cheese foam")} onChange={(event)=>{addToIng1("cheese foam", event.target.checked)}}/>} label="Cheese Foam" />
        <FormControlLabel value="Taro" control={<Checkbox checked={props.toppings.includes("taro")} onChange={(event)=>{addToIng1("taro", event.target.checked)}}/>} label="Taro" />
        <FormControlLabel value="Jelly" control={<Checkbox checked={props.toppings.includes("jelly")} onChange={(event)=>{addToIng1("jelly", event.target.checked)}}/>} label="Jelly" />
    </FormControl>
  );
}
