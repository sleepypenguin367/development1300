import "../App.css";

import { AppBar, Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { teal } from '@mui/material/colors';

export default function Topbar() {
  return (
    <AppBar position="static" style={{ background: teal[100] }}>
      <Typography variant="h1" component="div" align="center" sx={{ fontWeight: 'bold' , color: blueGrey[800]}}>
        Milk Tea Shop
      </Typography>
    </AppBar>
  );
}
