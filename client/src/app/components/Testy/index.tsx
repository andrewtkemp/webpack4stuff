import * as React from "react";
import * as actions from "../../actions";
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

export default class Testy extends React.Component {
    handleClick = () =>{
       console.log(this.props);
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}
  // // `dispatch` parameter needs a type annotation to type-check the correct shape of an action object when using dispatch function
  // const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  //   login:actions.login,
  //   test:actions.test
  //   // without using action creators, this will be validated using your RootAction union type
  //   // onIncrement: () => dispatch({ type: "counters/INCREMENT" }),
  // }, dispatch);
// export default connect(null, mapDispatchToProps)(Testy);