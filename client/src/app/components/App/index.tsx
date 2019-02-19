import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";


export interface IAppProps {
   classes?:{
      root:string
   }
}
export const App = (props:IAppProps) => {
      return (
         <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={16}>
            <Grid item xs={12} sm={6}>
               <Button variant="contained" color="primary">
                 <Link to="/login">Login</Link>
               </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
               <Button variant="contained" color="primary">
                  <Link to="/signup">Sign Up</Link>
               </Button>
            </Grid>
         </Grid>
      )
}