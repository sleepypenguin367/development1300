import '../App.css';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function CaffeineGroup(props) {
  function setCafType(b) {
    if (b == "All") {
      return "All";
    }
    if (b == "Caffeine Free") {
      return false;
    }
    return true;
  }
  function setRadType(b) {
    if (b == "All") {
      return "All";
    }
    if (b == false) {
      return "Caffeine Free";
    }
    return "Caffeine";
  }
  return (
    <FormControl>
      <FormLabel><h3>Caffeine Choices</h3></FormLabel>
      <RadioGroup value={setRadType(props.type)} onChange={(item)=> props.setType(setCafType(item.target.value))}>
        <FormControlLabel value="All" control={<Radio />} label="All" />
        <FormControlLabel value="Caffeine Free" control={<Radio />} label="Caffeine Free" />
        <FormControlLabel value="Caffeine" control={<Radio />} label="Caffeine"/>
      </RadioGroup>
    </FormControl>
  );
}