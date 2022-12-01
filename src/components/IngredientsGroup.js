
import '../App.css';

import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';

export default function IngredientsGroup(props) {

  function addToIng(ing, checked) {
    if (!checked && props.ingredients.includes(ing)) {
      const newList = [...props.ingredients.filter((item) => {return item !== ing})];
      props.setIngredients([...newList]);
    }
    else if (checked && !props.ingredients.includes(ing)) {
      const newList = [...props.ingredients, ing];
      props.setIngredients([...newList]);    
    }
  }

  return (
    <FormControl>
      <FormLabel><h3>Ingredients</h3></FormLabel>
        <FormControlLabel value="Strawberry" control={<Checkbox checked={props.ingredients.includes("strawberry")} onChange={(event)=>{addToIng("strawberry", event.target.checked)}}/>} label="Strawberry" />
        <FormControlLabel value="Mango" control={<Checkbox checked={props.ingredients.includes("mango")} onChange={(event)=>{addToIng("mango", event.target.checked)}}/>} label="Mango" />
        <FormControlLabel value="Grape" control={<Checkbox checked={props.ingredients.includes("grape")} onChange={(event)=>{addToIng("grape", event.target.checked)}}/>} label="Grape" />
        <FormControlLabel value="Bluberry" control={<Checkbox checked={props.ingredients.includes("blueberry")} onChange={(event)=>{addToIng("blueberry", event.target.checked)}}/>} label="Blueberry" />
        <FormControlLabel value="Banana" control={<Checkbox checked={props.ingredients.includes("banana")} onChange={(event)=>{addToIng("banana", event.target.checked)}}/>} label="Banana" />
        <FormControlLabel value="Chocolate" control={<Checkbox checked={props.ingredients.includes("chocolate")} onChange={(event)=>{addToIng("chocolate", event.target.checked)}}/>} label="Chocoloate" />
        <FormControlLabel value="Pineapple" control={<Checkbox checked={props.ingredients.includes("pineapple")} onChange={(event)=>{addToIng("pineapple", event.target.checked)}}/>} label="Pineapple" />
    </FormControl>
  );
}

