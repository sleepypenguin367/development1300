
import '../App.css';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function SortingGroup(props) {
  return (
    <FormControl>
      <FormLabel><h3>Sort By</h3></FormLabel>
      <RadioGroup value={props.sorting} onChange={(item)=> props.setSorting(item.target.value)}>
        <FormControlLabel value="Best Selling" control={<Radio />} label="Best Selling" />
        <FormControlLabel value="Rating" control={<Radio />} label="Rating"/>
        <FormControlLabel value="Price Low to High" control={<Radio />} label="Price Low to High" />
        <FormControlLabel value="Price High to Low" control={<Radio />} label="Price High to Low"/>
      </RadioGroup>
    </FormControl>
  );
}