import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import ErrorMessage from "../ErrorMessage";
import UserForm from "../UserForm";

export class App extends React.Component<{}, {}> {
   // componentDidMount(){
   //    fetch('/api/auth/signup',{method:"Post"})
   //    .then(response => response.json())
   //    .then(json => console.log(json))
   // }
   renderGridItem = () => {
      return(
      <Grid item xs={12} sm={6}>Hello World</Grid>
      )
   }
   render() {
      return (
         <Grid container direction="row" justify="space-evenly" alignItems="center">
               <UserForm/>
         </Grid>
      )
   }
}