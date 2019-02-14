import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export class App extends React.Component<{}, {}> {
   renderGridItem = () => {
      return(
      <Grid item xs={12} sm={6}>Hello World</Grid>
      )
   }
   render() {
      return (
         <Grid container direction="row" justify="space-evenly" alignItems="center">
            {this.renderGridItem()}
         </Grid>
      )
   }
}