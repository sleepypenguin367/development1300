
import '../App.css';

import SortingGroup from './SortingGroup';
import CaffeineGroup from './CaffeineGroup';
import IngredientsGroup from './IngredientsGroup';
import ToppingsGroup from './ToppingsGroup';

export default function Menu(props) {
  return (
    <div className='container_left'>
      <div className='selection'>
        <div>
          <SortingGroup sorting={props.sorting} setSorting={props.setSorting}/>
        </div>
        <div>
          <CaffeineGroup type={props.type} setType={props.setType}/>
        </div>
        <div>
          <IngredientsGroup ingredients={props.ingredients} setIngredients={props.setIngredients} />
        </div>
        <div>
          <ToppingsGroup toppings={props.toppings} setToppings={props.setToppings} />
        </div>
      </div>
    </div>
  );
}
