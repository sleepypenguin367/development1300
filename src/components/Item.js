import "../App.css";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Grid from '@mui/material/Unstable_Grid2';

export default function Item(props) {
  return (
    <Card sx={{ display: 'flex', maxWidth: 600, height: 200  }}>
      <CardMedia
        component="img"
        height="200"
        sx={{objectFit: "contain" }}
        src={"images/" + props.image + ".png"}
      />
      <Box sx={{  width:8000}}>
      <CardContent>
      <h1 className="h1">{props.tea.name}</h1>
      <h2 className="h2">{"Ingredients: " + props.tea.ingredients.toString()}</h2>
      <h2 className="h2-al">{"Toppings: " + props.tea.toppings.toString()}</h2>
      <h2 className="h2">${props.tea.price}</h2>
      <Grid container spacing={2}>
      <Grid xs={4}>
      <Rating
        display="inline-block"
        align-self="flex-end"
        name="text-feedback"
        value={props.tea.rating}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {/* reference for rating code: https://mui.com/material-ui/react-rating/#main-content */}
       </Grid>
       <Grid xs={8}>
      <CardActions>
        <AddButton />
      </CardActions>
      </Grid>
      </Grid>
      </CardContent>
      </Box>     
    </Card>
  );
  function AddButton() {
    function addClick() {
      let newCart = props.cart;
      let i = newCart.findIndex(item => item.name == props.tea.name);  
      if (i == -1) {
        props.setCart([...props.cart, {name: props.tea.name, count: 1, price: props.tea.price}]);
      } else {
        const c = newCart[i].count;
        newCart[i] = {name: props.tea.name, count: c+1, price: props.tea.price};
        props.setCart([...newCart]);
      }
      props.setTotal(props.total + props.tea.price);
    }
    return (
       <Button variant="contained" size="Large" onClick={addClick}>Add to Cart</Button>
    );
  }
}


